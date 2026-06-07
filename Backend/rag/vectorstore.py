import os

from langchain_chroma import Chroma

from rag.loader import load_documents
from rag.chunker import split_documents
from rag.embeddings import get_embedding_model


def create_vector_store():
    
    documents = load_documents()

   
    chunks = split_documents(documents)

    
    embedding_model = get_embedding_model()

    # Build absolute path to chroma_db relative to this file's location
    current_dir = os.path.dirname(os.path.abspath(__file__))
    chroma_path = os.path.join(os.path.dirname(current_dir), "chroma_db")

    
    vector_store = Chroma.from_documents(
        documents=chunks,
        embedding=embedding_model,
        persist_directory=chroma_path,
        collection_name="portfolio_chatbot"
    )

    print(f"Stored {len(chunks)} chunks in ChromaDB")

    return vector_store


if __name__ == "__main__":
    create_vector_store()