import os

from langchain_chroma import Chroma

from rag.embeddings import get_embedding_model


def load_vector_store():
    embedding_model = get_embedding_model()

    # Build absolute path to chroma_db relative to this file's location
    current_dir = os.path.dirname(os.path.abspath(__file__))
    chroma_path = os.path.join(os.path.dirname(current_dir), "chroma_db")

    vector_store = Chroma(
        persist_directory=chroma_path,
        embedding_function=embedding_model,
        collection_name="portfolio_chatbot"
    )

    return vector_store


def retrieve_documents(query, k=3):
    vector_store = load_vector_store()

    results = vector_store.similarity_search(
        query=query,
        k=k
    )

    print(f"\nRetrieved {len(results)} documents\n")

    for i, doc in enumerate(results, start=1):
        print(f"Result {i}")
        print(f"Source: {doc.metadata.get('source')}")
        print(f"Content: {doc.page_content[:300]}")
        print("-" * 50)

    return results


if __name__ == "__main__":
    query = input("Ask a question: ")
    retrieve_documents(query)