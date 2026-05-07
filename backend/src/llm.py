from langchain.chat_models import init_chat_model
from src.config import get_settings

settings = get_settings()

class LLM:
    def openai(self):
        return init_chat_model("gpt-4o", api_key=settings.OPENAI_API_KEY)

    def openai_mini(self):
        return init_chat_model("gpt-4o-mini", api_key=settings.OPENAI_API_KEY)
    

# llm instance
llm = LLM()