from pydantic_settings import BaseSettings, SettingsConfigDict
from functools import lru_cache
import os

_ENV_FILE = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=_ENV_FILE if os.path.exists(_ENV_FILE) else None,
        env_file_encoding="utf-8",
    )

    # llms
    OPENAI_API_KEY: str
    TAVILY_API_KEY: str

    # tracing
    LANGSMITH_TRACING: bool = True
    LANGSMITH_ENDPOINT:str = "https://api.smith.langchain.com"
    LANGSMITH_API_KEY: str
    LANGSMITH_PROJECT:str 

    # vector db
    PINECONE_API_KEY: str 
    PINECONE_INDEX_NAME: str 
    PINECONE_NAMESPACE: str 

    # streaming
    SSE_TOKEN_DELAY_SECONDS: float = 0.05


@lru_cache()
def get_settings() -> Settings:
    settings = Settings()
    for key, value in settings.model_dump().items():
        if value is not None:
            os.environ.setdefault(key, str(value))
    return settings
