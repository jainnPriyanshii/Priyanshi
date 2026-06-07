from langchain_text_splitters import RecursiveCharacterTextSplitter
from rag.loader import load_documents

def split_documents(documents,chunk_size=500,chunk_overlap=100):
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=chunk_overlap,
        length_function = len,
        separators=["\n\n","\n",""," "]
    )

    split_docs = text_splitter.split_documents(documents)
    print(f"Split {len(documents)} documents into {len(split_docs)} chunks")

    if split_docs:
        print(f"Example chunk")
        print(f"content: {split_docs[0].page_content[:200]}..")
        print(f"metadata: {split_docs[0].metadata}")

    return split_docs


if __name__ == "__main__":
    documents = load_documents()
    chunks = split_documents(documents)