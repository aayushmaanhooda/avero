# Avero Backend

FastAPI backend for the Avero chat agent. It exposes health checks and a streaming chatbot endpoint backed by LangChain, OpenAI, Pinecone RAG, Tavily search, and optional LangSmith tracing.

## Requirements

- Python 3.13
- uv
- OpenAI API key
- Tavily API key
- Pinecone index
- Optional LangSmith project/API key for tracing

## Setup

```bash
uv sync
```

Create `backend/.env` locally with:

```env
OPENAI_API_KEY=
TAVILY_API_KEY=
LANGSMITH_TRACING=true
LANGSMITH_ENDPOINT=https://api.smith.langchain.com
LANGSMITH_API_KEY=
LANGSMITH_PROJECT=
PINECONE_API_KEY=
PINECONE_INDEX_NAME=
PINECONE_NAMESPACE=
```

## Run Locally

```bash
uv run fastapi dev
```

The app is available at:

```text
http://127.0.0.1:8000
```

Useful endpoints:

```text
GET  /health
POST /chatbot
```

## RAG Indexing

The knowledge base source is:

```text
src/docs/rag.md
```

Run the indexer from the backend folder:

```bash
uv run python src/rag/index_avreo.py
```

Make sure the Pinecone index exists before indexing. For `text-embedding-3-small`, the index dimension should be `1536`.

## Deployment

This backend is configured for FastAPI Cloud:

```bash
uv run fastapi deploy .
```

The production entrypoint is:

```text
main:app
```

Runtime environment variables must be set in FastAPI Cloud. Do not rely on local `.env`, because it is ignored and not deployed.
