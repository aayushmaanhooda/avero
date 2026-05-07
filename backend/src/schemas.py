from typing import Literal

from pydantic import BaseModel, Field


class ChatRequest(BaseModel):
    message: str = Field(min_length=1, max_length=4000)
    thread_id: str = Field(min_length=1, max_length=128)


class ChatChunk(BaseModel):
    type: Literal["token", "done", "error"]
    content: str | None = None
