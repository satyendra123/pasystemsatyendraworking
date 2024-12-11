/*
import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { MdMic, MdMicOff } from 'react-icons/md';

const AudioStreaming = () => {
  const [recorder] = useState(new MicRecorder({ bitRate: 128 }));
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const startRecording = (e) => {
    e.stopPropagation();
    if (isBlocked) {
      alert('Microphone access is blocked.');
    } else {
      recorder
        .start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => {
          console.error('Error starting the recording:', e);
        });
    }
  };

  const stopRecording = (e) => {
    e.stopPropagation();
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        // Convert the blob to base64
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];

          // Send the base64 audio data to the Flask backend
          fetch('http://192.168.1.37:5000/upload', {  // Replace with your Flask server's IP
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audio: base64data }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        };

        setIsRecording(false);
      })
      .catch((e) => {
        alert('We could not retrieve your message');
        console.log(e);
      });
  };

  React.useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        setIsBlocked(true);
      }
    );
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button onClick={startRecording} disabled={isRecording}>
      <MdMic style={{ height: '24px', width: '24px', marginRight: '8px' ,borderRadius:'50%'}} />
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        <MdMicOff style={{ height: '24px', width: '24px', marginRight: '8px' }} />
      </button>
    </div>
  );
};

export default AudioStreaming;
*/

import React, { useState } from 'react';
import MicRecorder from 'mic-recorder-to-mp3';
import { MdMic, MdMicOff } from 'react-icons/md';

const AudioStreaming = ({ id }) => {
  const [recorder] = useState(new MicRecorder({ bitRate: 128 }));
  const [isRecording, setIsRecording] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const startRecording = (e) => {
    e.stopPropagation();
    if (isBlocked) {
      alert('Microphone access is blocked.');
    } else {
      recorder
        .start()
        .then(() => {
          setIsRecording(true);
        })
        .catch((e) => {
          console.error('Error starting the recording:', e);
        });
    }
  };

  const stopRecording = (e) => {
    e.stopPropagation();
    recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result.split(',')[1];

          fetch('http://192.168.1.37:5000/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ audio: base64data, id }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        };

        setIsRecording(false);
      })
      .catch((e) => {
        alert('We could not retrieve your message');
        console.log(e);
      });
  };

  React.useEffect(() => {
    navigator.getUserMedia(
      { audio: true },
      () => {
        setIsBlocked(false);
      },
      () => {
        setIsBlocked(true);
      }
    );
  }, []);

  return (
    <div style={{ display: 'flex', gap: '10px', position: 'relative', zIndex: 2 }}>
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: isRecording ? 'red' : 'lightgray', // Change color when recording
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={startRecording}
        disabled={isRecording}
      >
        <MdMic
          style={{
            height: '24px',
            width: '24px',
            color: isRecording ? 'white' : 'black', // Change icon color when recording
          }}
        />
      </div>
      <div
        style={{
          borderRadius: '50%',
          backgroundColor: !isRecording ? 'gray' : 'lightgray', // Default color when not recording
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        onClick={stopRecording}
        disabled={!isRecording}
      >
        <MdMicOff
          style={{
            height: '24px',
            width: '24px',
            color: !isRecording ? 'white' : 'black', // Change icon color when not recording
          }}
        />
      </div>
    </div>
  );
};

export default AudioStreaming;
