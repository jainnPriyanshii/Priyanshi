from langchain_community.document_loaders import DirectoryLoader,TextLoader
import os

# print("Current directory:", os.getcwd())
# print("Data exists:", os.path.exists("../data"))
# print("Files:", os.listdir("../data"))


def load_documents():
    loader = DirectoryLoader(
       path="../data",
       glob="**/*.txt",
        loader_cls=TextLoader
    )

    documents = loader.load()

    return documents

documents = load_documents()
print(f"Loaded {len(documents)} documents")

for doc in documents:
    print(doc.metadata)
    

