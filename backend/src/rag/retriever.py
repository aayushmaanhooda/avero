from pathlib import Path
import sys
from typing import List

BACKEND_ROOT = Path(__file__).resolve().parents[2]
if str(BACKEND_ROOT) not in sys.path:
    sys.path.insert(0, str(BACKEND_ROOT))

from langchain_core.documents import Document
from langchain_openai import OpenAIEmbeddings
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone

from src.config import get_settings


settings = get_settings()


def get_vector_store() -> PineconeVectorStore:
    """
    Connect to the existing Pinecone index and return a LangChain PineconeVectorStore.
    This does not create or index documents. It only connects for retrieval.
    """
    pc = Pinecone(api_key=settings.PINECONE_API_KEY)
    index = pc.Index(settings.PINECONE_INDEX_NAME)

    embeddings = OpenAIEmbeddings(
        model="text-embedding-3-small",
        api_key=settings.OPENAI_API_KEY,
    )

    vector_store = PineconeVectorStore(
        index=index,
        embedding=embeddings,
        namespace=settings.PINECONE_NAMESPACE,
    )

    return vector_store


def retrieve_documents(query: str, limit: int = 5) -> List[Document]:
    """
    Retrieve relevant Avreo knowledge base chunks from Pinecone.

    Args:
        query: User search query.
        limit: Number of chunks to return.

    Returns:
        List of LangChain Document objects.
    """
    vector_store = get_vector_store()

    docs = vector_store.similarity_search(
        query=query,
        k=limit,
    )

    return docs


def format_documents_for_tool(docs: List[Document]) -> str:
    """
    Convert retrieved documents into a clean text format for the agent tool.
    Includes metadata so the agent can understand where each chunk came from.
    """
    if not docs:
        return "No relevant Avreo knowledge base information was found."

    formatted_chunks = []

    for index, doc in enumerate(docs, start=1):
        metadata = doc.metadata or {}

        section = metadata.get("section", "Unknown section")
        source_file = metadata.get("source_file", "Unknown source file")
        source_type = metadata.get("source_type", "Unknown source type")
        chunk_index = metadata.get("chunk_index", "Unknown chunk index")

        formatted_chunk = f"""
Result {index}
Section: {section}
Source file: {source_file}
Source type: {source_type}
Chunk index: {chunk_index}

Content:
{doc.page_content}
""".strip()

        formatted_chunks.append(formatted_chunk)

    return "\n\n---\n\n".join(formatted_chunks)


def search_avreo_knowledge(query: str, limit: int = 5) -> str:
    """
    Main retrieval function used by the LangChain tool.
    """
    docs = retrieve_documents(query=query, limit=limit)
    return format_documents_for_tool(docs)


if __name__ == "__main__":
    result = search_avreo_knowledge(
        query="What does Avreo do?",
        limit=3,
    )

    print(result)
