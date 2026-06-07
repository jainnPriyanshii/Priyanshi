from flask import Flask, request, jsonify
from flask_cors import CORS

from rag.chatbot import get_info

app = Flask(__name__)
CORS(app)


@app.route("/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()

        question = data.get("message")

        if not question:
            return jsonify({
                "error": "Question is required"
            }), 400

        answer = get_info(question)

        return jsonify({
            "question": question,
            "answer": answer
        })

    except Exception as e:
        return jsonify({
            "error": str(e)
        }), 500


@app.route("/")
def home():
    return {
        "message": "Portfolio Chatbot API Running"
    }


if __name__ == "__main__":
    app.run(debug=True)