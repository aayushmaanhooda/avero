from collections.abc import AsyncIterator

from dotenv import load_dotenv

load_dotenv()

from langchain.agents import create_agent  # noqa: E402
from langchain_core.tracers.langchain import wait_for_all_tracers  # noqa: E402
from langgraph.checkpoint.memory import MemorySaver  # noqa: E402

from llm import llm  # noqa: E402
from tools import tools as agent_tools  # noqa: E402
from prompt import system_prompt  # noqa: E402

model = llm.openai()

# In-memory thread history. Per-thread state is keyed by `thread_id`
# in the runtime config. Survives only while the process is alive — fine
# for v1; swap to a persistent checkpointer later if needed.
checkpointer = MemorySaver()

agent = create_agent(
    model=model,
    tools=agent_tools,
    system_prompt=system_prompt(),
    checkpointer=checkpointer,
)


def _config(thread_id: str) -> dict:
    return {"configurable": {"thread_id": thread_id}}


def run_agent(message: str, thread_id: str = "default") -> str:
    try:
        result = agent.invoke(
            {"messages": [{"role": "user", "content": message}]},
            config=_config(thread_id),
        )
        return result["messages"][-1].content
    finally:
        wait_for_all_tracers()


async def stream_agent(message: str, thread_id: str) -> AsyncIterator[str]:
    """
    Yield text deltas from the agent for the given thread.
    Uses LangGraph's astream_events; we filter for `on_chat_model_stream`
    so the caller gets just the assistant text chunks (no tool noise).
    """
    try:
        async for event in agent.astream_events(
            {"messages": [{"role": "user", "content": message}]},
            config=_config(thread_id),
            version="v2",
        ):
            if event["event"] == "on_chat_model_stream":
                chunk = event["data"].get("chunk")
                if chunk is None:
                    continue
                content = getattr(chunk, "content", None)
                if isinstance(content, str) and content:
                    yield content
                elif isinstance(content, list):
                    for part in content:
                        if isinstance(part, dict) and part.get("type") == "text":
                            text = part.get("text", "")
                            if text:
                                yield text
    finally:
        wait_for_all_tracers()


if __name__ == "__main__":
    # response = run_agent("hi, what is date today and also what is time today??")
    # print(response)
    # response = run_agent("Hi, who are you?")
    # print(response)
    # response = run_agent("If a project saves 12 hours per week and the hourly cost is 80 dollars, how much money is saved per month?")
    # print(response)
    # response = run_agent("What are Avreo's exact pricing packages?")
    # print(response)

    # hard test

    # response = run_agent("Is Avreo the same company as avreo.com radiology software? Explain clearly.")
    # print(response)

    response = run_agent("Does Avreo have any confirmed public clients or case studies? If yes, name them. If not, say what is publicly known.")
    print(response)

    # response = run_agent("What is Avreo's view on RAG vs long-context prompting, and when should a business use each?")
    # print(response)

    # response = run_agent("I want to build an AI agent for my business. Based on Avreo's services, how could Avreo help me from strategy to implementation?")
    # print(response)
