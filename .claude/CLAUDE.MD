# Avreo — Project Guide for Claude

This file is the working contract between Claude and this codebase. Keep it accurate; outdated guidance here causes more harm than no guidance.

---

## 1. Project Context

**Product:** Avreo — currently rebranding from "Avero" to "Avreo".
**Source of truth (brand, copy, positioning):** https://avreo.ai/
**Company LinkedIn:** https://www.linkedin.com/company/avreo/about/

Anytime brand voice, taglines, product naming, or marketing copy is in question, defer to avreo.ai. Do not invent product descriptions or positioning — pull from the live site.

> Rebrand note: any lingering reference to "Avero" in code, copy, configs, package names, or assets should be flagged for migration to "Avreo". Do not silently rewrite — surface the occurrence and confirm scope before changing.

---

## 2. Tech Stack

### Frontend
1. **JavaScript** (not TypeScript by default — confirm before introducing TS)
2. **React**
3. **Tailwind CSS** for styling
4. **Vercel** for hosting / deployment

### Backend
1. **FastAPI** (Python)
2. **FastAPI Cloud** for deployment
3. **LangChain** for the agent pipeline — the system is RAG-based (retrieval-augmented generation)

### Implications for code suggestions
- Frontend: prefer functional React components, hooks, and Tailwind utility classes. Avoid CSS-in-JS, styled-components, or component libraries unless one is already in use.
- Backend: use FastAPI idioms — Pydantic models for I/O, dependency injection via `Depends`, async route handlers where I/O is involved.
- LLM/agent code: prefer LangChain primitives (chains, retrievers, vector stores, agents) over hand-rolled orchestration. Keep prompt templates, retrievers, and tool definitions modular.

---

## 3. Documentation Lookup

- **Always use the Context7 MCP** to fetch current documentation for any library, framework, SDK, or CLI before answering — even for well-known tools (React, FastAPI, LangChain, Tailwind, Vercel). Training data may be stale.
- Skip Context7 only for: refactoring, business-logic debugging, code review, or general programming concepts.

---

## 4. Repository Conventions

> Fill these in as conventions solidify. Until then, infer from existing code and ask if ambiguous.

- **Directory layout:** _TBD — document once frontend/backend folders settle._
- **Naming:** _TBD (camelCase for JS, snake_case for Python by default)._
- **Commit style:** _TBD — note here if a convention (e.g. Conventional Commits) is adopted._
- **Branching:** _TBD._
- **Testing:** _TBD — note framework choices (Vitest/Jest for frontend, pytest for backend) once adopted._

---

## 5. Working Style Preferences

- Keep responses terse. Don't over-explain unless asked.
- Don't add features, abstractions, or error handling beyond what the task requires.
- Prefer editing existing files over creating new ones.
- Don't write comments that restate the code; only write a comment when the *why* is non-obvious.
- For UI changes, verify in the browser before reporting done. If the dev server can't be run, say so explicitly.

---

## 6. Rebrand Checklist (active initiative)

Track and surface these during any work that touches the relevant surface:

- [ ] All user-facing copy says "Avreo" (not "Avero")
- [ ] Logos, favicons, social cards updated
- [ ] Domain references point to `avreo.ai`
- [ ] Email senders, support addresses updated
- [ ] Package names / repo names migrated where appropriate
- [ ] OG meta tags, sitemap, robots.txt reflect the new brand
- [ ] LinkedIn, marketing assets consistent with site

---

## 7. Open Questions / TBD

Items to resolve and then promote into the sections above:

- Is the frontend plain JS or TS?
- Is there a monorepo (e.g. `frontend/`, `backend/`) or separate repos?
- Which vector store backs the RAG pipeline?
- Which LLM provider(s) are in use behind LangChain?
- Are there existing CI/CD workflows beyond Vercel + FastAPI Cloud?

---

_Last updated: 2026-05-06_
