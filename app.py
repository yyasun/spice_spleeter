from flask import Flask, json, request, jsonify, send_file
import os
import ml
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/upload/<separate>', methods=['POST'])
def upload_file(separate):
    if 'file' not in request.files:
        return jsonify({'error': 'File is required.'}), 400

    file = request.files['file']    

    if file:
        file.save(file.filename)
        output_file_name = ml.extract_vocals(file.filename) \
            if separate == "separate" \
            else ml.extract_notes(file.filename)
                
        return jsonify({'filename': output_file_name}), 201

    return jsonify({'error': 'File upload failed.'}), 400

@app.route('/download/', methods=['GET'])
def download_file():
    file_path = request.args.get("filename")
    if os.path.exists(file_path):
        return send_file(file_path, as_attachment=True)
    else:
        return jsonify({'error': 'File not found.'}), 404

if __name__ == '__main__':
    app.run(debug=True)