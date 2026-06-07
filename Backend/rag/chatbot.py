from rag.retriever import retrieve_documents
from rag.llm import get_llm


def get_info(question):
   
    docs = retrieve_documents(question)

    
    context = "\n\n".join(
        doc.page_content for doc in docs
    )

    # Create prompt
    prompt = f"""
You are Priyanshi Jain's portfolio assistant.

Use ONLY the provided context to answer the question.

Context:
{context}

Question:
{question}

Rules:
1. Answer only from the provided context.
2. Do not make up information.
3. If the answer is not present in the context, respond with:
   "I don't have information about that in Priyanshi's portfolio."
"""

    
    llm = get_llm()

   
    response = llm.invoke(prompt)

    return response.content


