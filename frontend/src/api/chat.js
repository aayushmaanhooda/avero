import { API_BASE } from './config';

/**
 * Stream a chat response via Server-Sent Events from POST /chatbot.
 * EventSource is GET-only, so we read the response body manually and
 * parse SSE frames (delimited by `\n\n`, with `event:` and `data:` lines).
 *
 * Calls onToken(text) per delta, onDone() at the end, onError(err) on failure.
 * Pass an AbortSignal to cancel mid-stream (we use this when the panel closes).
 */
export async function streamChat({
  message,
  threadId,
  onToken,
  onDone,
  onError,
  signal,
}) {
  try {
    const res = await fetch(`${API_BASE}/chatbot`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify({ message, thread_id: threadId }),
      signal,
    });

    if (!res.ok || !res.body) {
      const text = res.body ? await res.text() : '';
      throw new Error(`HTTP ${res.status} ${res.statusText} ${text}`.trim());
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let sep;
      while ((sep = buffer.indexOf('\n\n')) !== -1) {
        const frame = buffer.slice(0, sep);
        buffer = buffer.slice(sep + 2);
        const parsed = parseFrame(frame);
        if (!parsed) continue;

        if (parsed.event === 'token' && parsed.data?.content) {
          onToken?.(parsed.data.content);
        } else if (parsed.event === 'done') {
          onDone?.();
          return;
        } else if (parsed.event === 'error') {
          throw new Error(parsed.data?.content ?? 'stream error');
        }
      }
    }
    onDone?.();
  } catch (err) {
    if (err?.name === 'AbortError') return;
    onError?.(err);
  }
}

function parseFrame(frame) {
  let event = 'message';
  const dataLines = [];
  for (const line of frame.split('\n')) {
    if (line.startsWith('event:')) {
      event = line.slice(6).trim();
    } else if (line.startsWith('data:')) {
      dataLines.push(line.slice(5).trimStart());
    }
  }
  if (dataLines.length === 0) return null;
  const raw = dataLines.join('\n');
  try {
    return { event, data: JSON.parse(raw) };
  } catch {
    return { event, data: { content: raw } };
  }
}
