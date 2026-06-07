import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI


load_dotenv()


def get_llm():
    llm = ChatGoogleGenerativeAI(
        model="gemini-2.5-flash",
        temperature=0.3,
        google_api_key=os.getenv("GOOGLE_API_KEY")
    )

    return llm


if __name__ == "__main__":
    llm = get_llm()

    response = llm.invoke("Hello, introduce yourself in one sentence.")

    print(response.content)