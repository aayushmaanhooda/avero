from datetime import datetime
from zoneinfo import ZoneInfo
from langchain.tools import tool
from langchain_tavily import TavilySearch
from src.config import get_settings
from src.rag.retriever import search_avreo_knowledge

settings = get_settings()


tavily_search_tool = TavilySearch(
    max_results=5,
    topic="general",
    search_depth="advanced",
    include_answer=True,
    api_key= settings.TAVILY_API_KEY
)


@tool("web_search")
def web_search(query: str) -> str:
    """
    Search the web for current or external information.

    Use this when:
    - The user asks about recent or up-to-date information
    - The answer is not available in the Avreo RAG knowledge base
    - The user asks about general AI trends, industry news, competitors, or external context

    Args:
        query: The search query to look up on the web.
    """
    try:
        result = tavily_search_tool.invoke({"query": query})
        return str(result)
    except Exception as e:
        return f"Web search failed: {str(e)}"



@tool("current_datetime")
def current_datetime(timezone: str = "Australia/Sydney") -> str:
    """
    Get the current date and time.

    Use this when:
    - The user asks for today's date
    - The user asks for the current time
    - The user asks about scheduling
    - The user asks time-sensitive questions

    Args:
        timezone: IANA timezone string. Default is Australia/Sydney.
    """
    try:
        now = datetime.now(ZoneInfo(timezone))
        return now.strftime("%A, %d %B %Y, %I:%M %p %Z")
    except Exception:
        now = datetime.now(ZoneInfo("Australia/Sydney"))
        return now.strftime("%A, %d %B %Y, %I:%M %p %Z")
    
@tool("rag_knowledge")
def rag_knowledge(query: str, limit: int = 10) -> str:
    """
    Search the Avreo RAG knowledge base for verified company information.

    Use this as the primary source of truth for Avreo-specific questions.

    Use this for:
    - Avreo company information
    - Avreo services
    - Avreo mission and goals
    - Founder or team information
    - Website and LinkedIn information
    - Client or case study information
    - Any question about Avreo

    Args:
        query: Search terms to look for.
        limit: Maximum number of results to return.
    """
    return search_avreo_knowledge(query=query, limit=limit)


@tool("calculator", description="Performs arithmetic calculations. Use this for any math problems.")
def calc(expression: str) -> str:
    """Evaluate mathematical expressions."""
    return str(eval(expression))

tools = [
    web_search,
    current_datetime,
    rag_knowledge,
    calc,
]