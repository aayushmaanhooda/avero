from collections.abc import AsyncIterable

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.sse import EventSourceResponse, ServerSentEvent

from src.agent import stream_agent
from src.schemas import ChatChunk, ChatRequest


app = FastAPI(title="Avero Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "https://avero-gamma.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "I am root of avreo.ai"}


@app.get("/health")
def health():
    return {"message": "Running healthy"}


@app.post("/chatbot", response_class=EventSourceResponse)
async def chatbot(req: ChatRequest) -> AsyncIterable[ServerSentEvent]:
    try:
        async for delta in stream_agent(req.message, req.thread_id):
            yield ServerSentEvent(
                event="token",
                data=ChatChunk(type="token", content=delta),
            )
        yield ServerSentEvent(event="done", data=ChatChunk(type="done"))
    except Exception as exc:
        yield ServerSentEvent(
            event="error",
            data=ChatChunk(type="error", content=str(exc)),
        )


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("src.main:app", port=8000, host="localhost")
    
