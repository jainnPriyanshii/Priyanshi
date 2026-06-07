from sentence_transformers import SentenceTransformer
from langchain_huggingface import HuggingFaceEmbeddings


def get_embedding_model():
    return HuggingFaceEmbeddings(
        model_name="sentence-transformers/all-MiniLM-L6-v2"
    )


def generate_embeddings():
    from rag.chunker import split_documents
    from rag.loader import load_documents
    
    model = SentenceTransformer("sentence-transformers/all-MiniLM-L6-v2")

    
    documents = load_documents()
    chunks = split_documents(documents)

    
    chunk_texts = [chunk.page_content for chunk in chunks]

   
    embeddings = model.encode(chunk_texts)

    print(f"Total Chunks: {len(chunks)}")
    print(f"Total Embeddings: {len(embeddings)}")
    print(f"Embedding Dimension: {len(embeddings[0])}")

    return embeddings


if __name__ == "__main__":
    generate_embeddings()