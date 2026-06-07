from langchain_chroma import Chroma

from loader import load_documents
from chunker import split_documents
from embeddings import get_embedding_model


def create_vector_store():
    # Load documents
    documents = load_documents()

    # Create chunks
    chunks = split_documents(documents)

    # Load embedding model
    embedding_model = get_embedding_model()

    # Create and persist ChromaDB
    vector_store = Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory="../chroma_db",
        collection_name="portfolio_chatbot"
    )

    print(f"Stored {len(chunks)} chunks in ChromaDB")

    return vector_store


if __name__ == "__main__":
    create_vector_store()