<p align="center">
  <img src="frontend/public/logo/logo.png" alt="Avreo" width="200" />
</p>

Landing page for **Avreo** — and the MVP behind it: the **Avreo chat agent**.

## What's inside

- **Frontend** — React + Tailwind landing page (Vercel).
- **Backend** — FastAPI service powering the chat agent (FastAPI Cloud).

## The agent 

A LangChain agent with **4 tools**:

1. `web_search` — Tavily-powered live web lookup
2. `current_datetime` — timezone-aware now
3. `rag_knowledge` — Avreo's verified knowledge base (RAG)
4. `calculator` — arithmetic

## RAG 

- **Pinecone** as the vector DB
- **Semantic chunking** for cleaner retrieval
- Backs `rag_knowledge` as the source of truth for anything Avreo-specific

---

Made with love and patience ❤️🛠️
