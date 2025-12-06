from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# Load model
with open("fake_news_model.pkl", "rb") as f:
    model = pickle.load(f)

# Load vectorizer
with open("tfidf_vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Fake News Classifier API is Running!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    text = data.get('text', '')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    # Preprocess text like TF-IDF training
    text_clean = text.strip().lower()

    # Transform using the vectorizer exactly as during training
    vect_text = vectorizer.transform([text_clean])
    
    if vect_text.nnz == 0:
        # Model won't recognize any words
        return jsonify({'error': 'No recognizable words in text', 'raw_prediction': None}), 400

    prediction = model.predict(vect_text)[0]

    if prediction == 1:
        label = "Real News"
    else:
        label = "Fake News"


    # Optional debug logs
    print("Input text:", text)
    print("Cleaned text:", text_clean)
    print("Vector shape:", vect_text.shape, "Non-zero features:", vect_text.nnz)
    print("Prediction:", label)

    return jsonify({
        "label": label,
        "raw_prediction": int(prediction)
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)
