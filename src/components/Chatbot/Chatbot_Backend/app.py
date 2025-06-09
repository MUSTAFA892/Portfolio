from flask import Flask, request, jsonify
from flask_cors import CORS
import csv
import re

app = Flask(__name__)
CORS(app)

chat_history = []

# Load FAQs from CSV
def load_faq_from_csv(filename='Data/Data.csv'):
    faq_dict = {}
    with open(filename, mode='r', encoding='utf-8') as file:
        reader = csv.DictReader(file)
        for row in reader:
            question = row['question'].strip().lower()
            answer = row['answer'].strip()
            faq_dict[question] = answer
    return faq_dict

faq_data = load_faq_from_csv()

# Keyword overlap matching
def find_best_match(user_input):
    user_input = user_input.lower()
    user_keywords = set(re.findall(r'\b\w+\b', user_input))

    best_match = None
    best_score = 0

    for question, answer in faq_data.items():
        question_keywords = set(re.findall(r'\b\w+\b', question))
        score = len(user_keywords.intersection(question_keywords))

        if score > best_score:
            best_score = score
            best_match = answer

    if best_score > 0:
        return best_match
    return "Sorry, I don't know the answer to that yet."

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_msg = data.get('message', '')
    bot_response = find_best_match(user_msg)
    chat_history.append({'user': user_msg, 'bot': bot_response})
    return jsonify({'bot': bot_response})

@app.route('/history', methods=['GET'])
def history():
    return jsonify(chat_history)

if __name__ == '__main__':
    app.run(debug=True)
