from langchain_community.document_loaders import DirectoryLoader,TextLoader
import os

# print("Current directory:", os.getcwd())
# print("Data exists:", os.path.exists("../data"))
# print("Files:", os.listdir("../data"))


def load_documents():
    # Get the directory where this file is located
    current_dir = os.path.dirname(os.path.abspath(__file__))
    data_path = os.path.join(os.path.dirname(current_dir), "data")
    
    loader = DirectoryLoader(
       path=data_path,
       glob="**/*.txt",
        loader_cls=TextLoader
    )

    documents = loader.load()

    return documents


if __name__ == "__main__":
    documents = load_documents()
    print(f"Loaded {len(documents)} documents")

    for doc in documents:
        print(doc.metadata)
