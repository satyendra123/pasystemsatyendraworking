from flask import Flask, request, jsonify
import wave
import pyaudio

app = Flask(__name__)

p = pyaudio.PyAudio()

def play_audio(data):
    wf = wave.open("audio_stream.wav", 'wb')
    wf.setnchannels(1)
    wf.setsampwidth(p.get_sample_size(pyaudio.paFloat32))
    wf.setframerate(44100)
    wf.writeframes(data)
    wf.close()

    wf = wave.open("audio_stream.wav", 'rb')
    stream = p.open(format=pyaudio.paFloat32,
                    channels=wf.getnchannels(),
                    rate=wf.getframerate(),
                    output=True)

    data = wf.readframes(1024)
    while data:
        stream.write(data)
        data = wf.readframes(1024)
    
    stream.stop_stream()
    stream.close()

@app.route('/stream-audio', methods=['POST'])
def stream_audio():
    if request.data:
        play_audio(request.data)
        return jsonify({"message": "Audio is streaming", "status": "success"}), 200
    else:
        return jsonify({"message": "No audio data received", "status": "error"}), 400

if __name__ == '__main__':
    app.run(debug=True)
