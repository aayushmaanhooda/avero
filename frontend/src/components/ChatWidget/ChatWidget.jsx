import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faXmark,
  faPaperPlane,
  faMicrophone,
  faMagnifyingGlass,
  faCompass,
  faWandMagicSparkles,
  faBriefcase,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { streamChat } from '../../api/chat';

const ACCENT = '#00BBFF';
const THREAD_KEY = 'avreo:yianni:thread_id';

const chatMaskStyle = {
  WebkitMaskImage: 'url(/logo/chat.png)',
  maskImage: 'url(/logo/chat.png)',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  backgroundColor: ACCENT,
};

const SUGGESTIONS = [
  { icon: faMagnifyingGlass, label: 'What does Avreo actually do?' },
  { icon: faCompass, label: 'How would you redesign my business around AI?' },
  { icon: faWandMagicSparkles, label: 'Show me what an AI-native company looks like.' },
  { icon: faBriefcase, label: 'Where do we start — strategy, design, or build?' },
];

// Canned answers for the suggestion chips — served from the frontend with a
// short delay so the rest of the bot feels consistent. Skips the RAG roundtrip
// for questions we already know how to answer.
const CANNED_ANSWERS = {
  'What does Avreo actually do?':
    "We help organisations rebuild themselves around AI — strategy, design, and build. We work with leadership teams to discover their AI-native future, then progressively augment today's business and build the next generation of AI-powered capabilities alongside it.",
  'How would you redesign my business around AI?':
    "We start with the question every leader should ask: if you started your business today with AI available from day one, what would it look like? From there we map roles, processes, decisions, and functions onto an AI-native operating model — your Jetstar — and run it in parallel with the business you operate today.",
  'Show me what an AI-native company looks like.':
    "AI-native means the company is built around AI strengths — workflows are inverted so AI does the heavy lifting by default, natural language is the interface to the business, data is structured for continuous learning, and agents proactively monitor, decide, and act. People focus on judgement, creativity, and governance.",
  'Where do we start — strategy, design, or build?':
    "It depends where you sit. Most teams start with Discover — a leadership engagement to imagine the AI-native version of your business. From there we Augment existing workflows with AI agents, intelligent automation and decision support, then Build the new capabilities that define your future. You can engage at any phase.",
};

const CANNED_DELAY_MS = 2000;
const CANNED_TOKEN_INTERVAL_MS = 35;

// Lightweight inline renderer for assistant messages. Handles markdown links,
// bare URLs and bold text. Newlines are preserved via `whitespace-pre-wrap`.
const INLINE_PATTERN =
  /(\[[^\]]+\]\((https?:\/\/[^)]+)\))|(\*\*[^*]+\*\*)|(https?:\/\/[^\s<]+)/g;
const TRAILING_URL_PUNCTUATION = /[.,!?;:)]+$/;

const renderExternalLink = (href, label, key) => (
  <a
    key={key}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/[0.06] px-2 py-0.5 font-medium transition hover:border-white/25 hover:bg-white/[0.10]"
    style={{ color: ACCENT }}
  >
    <span>{label}</span>
    <FontAwesomeIcon
      icon={faArrowUpRightFromSquare}
      className="h-2.5 w-2.5 opacity-80"
    />
  </a>
);

const renderInline = (text) => {
  if (!text) return text;
  const out = [];
  let last = 0;
  let key = 0;
  let m;
  INLINE_PATTERN.lastIndex = 0;
  while ((m = INLINE_PATTERN.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) {
      const inner = m[1].match(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/);
      out.push(renderExternalLink(inner[2], inner[1], key++));
    } else if (m[3]) {
      out.push(
        <strong key={key++} className="font-semibold text-white">
          {m[3].slice(2, -2)}
        </strong>,
      );
    } else if (m[4]) {
      const trailing = m[4].match(TRAILING_URL_PUNCTUATION)?.[0] ?? '';
      const href = trailing ? m[4].slice(0, -trailing.length) : m[4];
      out.push(renderExternalLink(href, href, key++));
      if (trailing) out.push(trailing);
    }
    last = INLINE_PATTERN.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
};

const getThreadId = () => {
  let id = localStorage.getItem(THREAD_KEY);
  if (!id) {
    id =
      typeof crypto !== 'undefined' && crypto.randomUUID
        ? crypto.randomUUID()
        : `t_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(THREAD_KEY, id);
  }
  return id;
};

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [streaming, setStreaming] = useState(false);
  const [error, setError] = useState(null);
  const [usedSuggestions, setUsedSuggestions] = useState([]);
  const [chipsDismissed, setChipsDismissed] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);
  const abortRef = useRef(null);
  const threadIdRef = useRef(null);

  const remainingSuggestions = SUGGESTIONS.filter(
    (s) => !usedSuggestions.includes(s.label),
  );

  if (threadIdRef.current === null && typeof window !== 'undefined') {
    threadIdRef.current = getThreadId();
  }

  useEffect(() => {
    if (
      open &&
      inputRef.current &&
      typeof window !== 'undefined' &&
      window.matchMedia('(min-width: 768px)').matches
    ) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Abort the in-flight request when the panel closes mid-stream.
  useEffect(() => {
    if (!open && abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
      setStreaming(false);
    }
  }, [open]);

  // Auto-scroll to the latest message as tokens stream in.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, streaming]);

  const sendCanned = async (text, answer) => {
    setError(null);
    setInput('');
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: text },
      { role: 'assistant', content: '' },
    ]);
    setStreaming(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    // Initial "thinking" pause so the dots animate.
    await new Promise((resolve) => {
      const t = setTimeout(resolve, CANNED_DELAY_MS);
      ctrl.signal.addEventListener('abort', () => {
        clearTimeout(t);
        resolve();
      });
    });
    if (ctrl.signal.aborted) {
      setStreaming(false);
      abortRef.current = null;
      return;
    }

    // Drip the answer in word-by-word so it feels like the rest of the bot.
    const words = answer.split(/(\s+)/);
    for (const word of words) {
      if (ctrl.signal.aborted) break;
      await new Promise((resolve) => setTimeout(resolve, CANNED_TOKEN_INTERVAL_MS));
      if (ctrl.signal.aborted) break;
      setMessages((prev) => {
        const next = prev.slice();
        const last = next[next.length - 1];
        if (last && last.role === 'assistant') {
          next[next.length - 1] = { ...last, content: last.content + word };
        }
        return next;
      });
    }

    setStreaming(false);
    abortRef.current = null;
  };

  const send = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;

    if (SUGGESTIONS.some((s) => s.label === trimmed)) {
      setUsedSuggestions((prev) =>
        prev.includes(trimmed) ? prev : [...prev, trimmed],
      );
    }

    if (CANNED_ANSWERS[trimmed]) {
      return sendCanned(trimmed, CANNED_ANSWERS[trimmed]);
    }

    setError(null);
    setInput('');

    setMessages((prev) => [
      ...prev,
      { role: 'user', content: trimmed },
      { role: 'assistant', content: '' },
    ]);
    setStreaming(true);

    const ctrl = new AbortController();
    abortRef.current = ctrl;

    await streamChat({
      message: trimmed,
      threadId: threadIdRef.current,
      signal: ctrl.signal,
      onToken: (delta) => {
        setMessages((prev) => {
          const next = prev.slice();
          const last = next[next.length - 1];
          if (last && last.role === 'assistant') {
            next[next.length - 1] = { ...last, content: last.content + delta };
          }
          return next;
        });
      },
      onDone: () => {
        setStreaming(false);
        abortRef.current = null;
      },
      onError: (err) => {
        setStreaming(false);
        abortRef.current = null;
        setError(err?.message ?? 'Something went wrong.');
        setMessages((prev) => {
          const next = prev.slice();
          const last = next[next.length - 1];
          if (last && last.role === 'assistant' && last.content === '') {
            next.pop();
          }
          return next;
        });
      },
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  const showWelcome = messages.length === 0;

  return (
    <>
      {/* Floating launcher — chat-bubble shape */}
      <button
        type="button"
        aria-label={open ? 'Close Yianni' : 'Open Yianni'}
        onClick={() => setOpen((v) => !v)}
        className="group fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-4 z-[60] md:bottom-8 md:right-8"
      >
        <div
          className="relative flex h-14 w-14 items-center justify-center border border-white/30 bg-brand-950/95 backdrop-blur-md transition duration-300 group-hover:-translate-y-0.5 group-hover:border-white/50 md:h-[70px] md:w-[70px]"
          style={{ borderRadius: '22px 22px 6px 22px' }}
        >
          {open ? (
            <FontAwesomeIcon
              icon={faXmark}
              className="h-5 w-5 text-white md:h-6 md:w-6"
            />
          ) : (
            <div
              className="h-7 w-7 md:h-9 md:w-9"
              style={chatMaskStyle}
            />
          )}
          <span
            aria-hidden="true"
            className="absolute -bottom-[5px] right-2 h-3.5 w-3.5 border-b border-r border-white/30 bg-brand-950/95"
            style={{ transform: 'rotate(45deg)' }}
          />
        </div>
      </button>

      {/* Panel */}
      <div
        className={`fixed inset-x-3 bottom-[calc(5rem+env(safe-area-inset-bottom))] top-3 z-[60] w-auto max-w-none origin-bottom transition duration-300 md:inset-x-auto md:top-auto md:bottom-28 md:right-7 md:w-[calc(100vw-2rem)] md:max-w-[400px] md:origin-bottom-right ${
          open
            ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
            : 'pointer-events-none translate-y-2 scale-95 opacity-0'
        }`}
        role="dialog"
        aria-label="Chat with Yianni"
        aria-hidden={!open}
      >
        <div
          className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0B1A36] backdrop-blur-xl md:h-[560px] md:max-h-[78vh]"
          style={{
            boxShadow:
              '0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03) inset',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10">
                <div className="h-4 w-4" style={chatMaskStyle} />
              </div>
              <div className="text-sm font-semibold tracking-tight text-white">
                Yianni
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="flex h-7 w-7 items-center justify-center rounded-md text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <FontAwesomeIcon icon={faXmark} className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Body */}
          <div
            ref={scrollRef}
            className="min-h-0 flex-1 overflow-y-auto px-4 pb-4 pt-6 [-ms-overflow-style:none] [scrollbar-width:none] md:px-5 md:pb-6 md:pt-14 [&::-webkit-scrollbar]:hidden"
          >
            {showWelcome ? (
              <>
                <div className="flex flex-col items-center text-center">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/[0.06] ring-1 ring-white/10 md:h-16 md:w-16">
                    <div className="h-7 w-7 md:h-8 md:w-8" style={chatMaskStyle} />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white md:mt-5">
                    I'm{' '}
                    <span style={{ color: ACCENT }} className="font-display italic">
                      Yianni
                    </span>
                    , your Avreo assistant
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/60">
                    Ask about how we help organisations rebuild around AI —
                    strategy, design, or build.
                  </p>
                </div>

                <ul className="mt-5 space-y-2 md:mt-6 md:space-y-2.5">
                  {remainingSuggestions.map((s) => (
                    <li key={s.label}>
                      <button
                        type="button"
                        onClick={() => send(s.label)}
                        disabled={streaming}
                        className="group flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-left text-[13px] text-white/75 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white disabled:opacity-50 md:py-3"
                      >
                        <FontAwesomeIcon
                          icon={s.icon}
                          className="h-3.5 w-3.5 flex-none"
                          style={{ color: ACCENT }}
                        />
                        <span className="leading-snug">{s.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <ul className="space-y-3">
                {messages.map((m, i) => (
                  <li
                    key={i}
                    className={
                      m.role === 'user' ? 'flex justify-end' : 'flex justify-start'
                    }
                  >
                    <div
                      className={
                        m.role === 'user'
                          ? 'max-w-[85%] whitespace-pre-wrap break-words rounded-2xl rounded-br-sm bg-white/[0.10] px-3.5 py-2.5 text-sm leading-relaxed text-white'
                          : 'max-w-[90%] whitespace-pre-wrap break-words rounded-2xl rounded-bl-sm border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm leading-relaxed text-white/90'
                      }
                    >
                      {m.content
                        ? m.role === 'assistant'
                          ? renderInline(m.content)
                          : m.content
                        : (
                        <span className="inline-flex items-center gap-1 text-white/50">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60" />
                          <span
                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60"
                            style={{ animationDelay: '120ms' }}
                          />
                          <span
                            className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/60"
                            style={{ animationDelay: '240ms' }}
                          />
                        </span>
                      )}
                    </div>
                  </li>
                ))}
                {error && (
                  <li className="text-center text-xs text-red-300/80">{error}</li>
                )}
              </ul>
            )}
          </div>

          {/* Remaining suggestion chips (after conversation has started) */}
          {!showWelcome && !chipsDismissed && remainingSuggestions.length > 0 && (
            <div className="border-t border-white/10 px-3 pb-2 pt-2.5">
              <div className="flex items-start gap-2">
                <div className="flex flex-1 flex-wrap gap-1.5">
                  {remainingSuggestions.map((s) => (
                    <button
                      key={s.label}
                      type="button"
                      onClick={() => send(s.label)}
                      disabled={streaming}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/75 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white disabled:opacity-50"
                    >
                      <FontAwesomeIcon
                        icon={s.icon}
                        className="h-2.5 w-2.5 flex-none"
                        style={{ color: ACCENT }}
                      />
                      <span className="leading-snug">{s.label}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setChipsDismissed(true)}
                  aria-label="Hide suggestions"
                  className="flex h-5 w-5 flex-none items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
                >
                  <FontAwesomeIcon icon={faXmark} className="h-2.5 w-2.5" />
                </button>
              </div>
            </div>
          )}

          {/* Composer */}
          <form
            onSubmit={onSubmit}
            className="border-t border-white/10 px-3 py-2.5 md:px-4 md:py-3"
          >
            <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 focus-within:border-white/25 md:py-2.5">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Yianni about Avreo..."
                disabled={streaming}
                className="min-w-0 flex-1 bg-transparent text-base text-white placeholder-white/35 focus:outline-none disabled:opacity-50 md:text-sm"
              />
              <button
                type="button"
                aria-label="Voice input"
                className="flex h-7 w-7 items-center justify-center rounded-md text-white/55 transition hover:bg-white/10 hover:text-white"
              >
                <FontAwesomeIcon icon={faMicrophone} className="h-3.5 w-3.5" />
              </button>
              <button
                type="submit"
                aria-label="Send message"
                disabled={!input.trim() || streaming}
                className="flex h-7 w-7 items-center justify-center rounded-md transition disabled:opacity-40"
                style={{
                  backgroundColor:
                    input.trim() && !streaming ? ACCENT : 'rgba(255,255,255,0.06)',
                  color:
                    input.trim() && !streaming ? '#0B1A36' : 'rgba(255,255,255,0.55)',
                }}
              >
                <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" />
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] uppercase tracking-[0.18em] text-white/30">
              Powered by Avreo
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
