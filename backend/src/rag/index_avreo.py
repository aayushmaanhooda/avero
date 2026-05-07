from pathlib import Path
import sys
from typing import List
from uuid import uuid4

BACKEND_ROOT = Path(__file__).resolve().parents[2]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from langchain_core.documents import Document
from langchain_experimental.text_splitter import SemanticChunker
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

from src.config import get_settings


settings = get_settings()

MARKDOWN_FILE_PATH = Path(__file__).parent.parent / "docs" / "rag.md"

def load_markdown_file() -> str:
    if not MARKDOWN_FILE_PATH.exists():
        raise FileNotFoundError(f"Markdown file not found: {MARKDOWN_FILE_PATH}")

    return MARKDOWN_FILE_PATH.read_text(encoding="utf-8")


def get_section_from_chunk(chunk_text: str) -> str:
    """
    Finds the nearest markdown heading inside the chunk.
    This helps us store section-level metadata for retrieval.
    """
    lines = chunk_text.splitlines()

    for line in lines:
        clean_line = line.strip()

        if clean_line.startswith("## "):
            return clean_line.replace("## ", "").strip()

        if clean_line.startswith("# "):
            return clean_line.replace("# ", "").strip()

    return "General"


def build_documents(chunks: List[str]) -> List[Document]:
    documents = []

    for index, chunk in enumerate(chunks):
        section = get_section_from_chunk(chunk)

        document = Document(
            page_content=chunk,
            metadata={
                "company": "Avreo",
                "source_file": MARKDOWN_FILE_PATH.name,
                "source_type": "markdown_knowledge_base",
                "section": section,
                "chunk_index": index,
            },
        )

        documents.append(document)

    return documents


def index_documents() -> None:
    markdown_text = load_markdown_file()

    embeddings = OpenAIEmbeddings(
        model="text-embedding-3-small",
        api_key=settings.OPENAI_API_KEY,
    )

    semantic_chunker = SemanticChunker(
        embeddings=embeddings,
        breakpoint_threshold_type="percentile",
        breakpoint_threshold_amount=95,
    )

    chunks = semantic_chunker.split_text(markdown_text)

    documents = build_documents(chunks)

    print(f"Created {len(documents)} semantic chunks.")

    pc = Pinecone(api_key=settings.PINECONE_API_KEY)
    index = pc.Index(settings.PINECONE_INDEX_NAME)

    vector_store = PineconeVectorStore(
        index=index,
        embedding=embeddings,
        namespace=settings.PINECONE_NAMESPACE,
    )

    ids = [str(uuid4()) for _ in documents]

    vector_store.add_documents(
        documents=documents,
        ids=ids,
    )

    print("Avreo knowledge base indexed successfully.")


if __name__ == "__main__":
    index_documents()
