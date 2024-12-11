from flask import Flask, request, jsonify
from flask_cors import CORS
from gtts import gTTS
import base64
import os
from playsound import playsound

app = Flask(__name__)
CORS(app)

AUDIO_FILE_PATH = "received_audio.mp3"
TEXT_TO_SPEECH_FILE_PATH = "spoken_message.mp3"

MY_ID = "1" 

@app.route('/upload', methods=['POST'])
def upload_audio():
    data = request.json
    audio_base64 = data.get('audio')
    id = data.get('id')
    
    print(f"Received ID: {id} | My ID: {MY_ID}")

    if not audio_base64:
        return jsonify({"error": "No audio data provided"}), 400

    if id != MY_ID:
        return jsonify({"error": "ID mismatch. This Raspberry Pi does not process this audio."}), 403

    try:
        with open(AUDIO_FILE_PATH, "wb") as audio_file:
            audio_file.write(base64.b64decode(audio_base64))

        print(f"File saved to {AUDIO_FILE_PATH}")

        try:
            playsound(AUDIO_FILE_PATH)
        except Exception as e:
            print(f"Error playing the audio file: {str(e)}")
            return jsonify({"error": f"Error playing the audio file: {str(e)}"}), 500

        try:
            os.remove(AUDIO_FILE_PATH)
            print(f"File {AUDIO_FILE_PATH} deleted")
        except Exception as e:
            print(f"Error deleting the file: {str(e)}")

        return jsonify({"message": "Audio received, saved, played, and deleted successfully"}), 200

    except Exception as e:
        print(f"Error processing the audio file: {str(e)}")
        return jsonify({"error": f"Error processing the audio file: {str(e)}"}), 500

@app.route('/text-to-speech', methods=['POST'])
def text_to_speech():
    data = request.json
    message = data.get('message')
    id = data.get('id')
    
    if not message:
        return jsonify({"error": "No text message provided"}), 400
    
    print(f"Received ID: {id} | My ID: {MY_ID}")

    if id != MY_ID:
        return jsonify({"error": "ID mismatch. This Raspberry Pi does not process this audio."}), 403
    
    try:
        tts = gTTS(message)
        tts.save(TEXT_TO_SPEECH_FILE_PATH)

        print(f"File saved to {TEXT_TO_SPEECH_FILE_PATH}")

        try:
            playsound(TEXT_TO_SPEECH_FILE_PATH)
        except Exception as e:
            print(f"Error playing the audio file: {str(e)}")
            return jsonify({"error": f"Error playing the audio file: {str(e)}"}), 500

        try:
            os.remove(TEXT_TO_SPEECH_FILE_PATH)
            print(f"File {TEXT_TO_SPEECH_FILE_PATH} deleted")
        except Exception as e:
            print(f"Error deleting the file: {str(e)}")

        return jsonify({"message": "Text-to-speech conversion, playback, and deletion successful"}), 200

    except Exception as e:
        print(f"Error processing the text message: {str(e)}")
        return jsonify({"error": f"Error processing the text message: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True) 
