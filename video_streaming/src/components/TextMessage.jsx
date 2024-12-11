import React, { useState } from 'react';
import axios from 'axios';
import { FaRegCommentDots } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './TextMessage.css'; // Import the CSS file for styling

const TextMessage = ({id}) => {
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const navigate = useNavigate();

    const handleIconClick = (e) => {
        e.stopPropagation();
        setShowPopup(true); // Show the popup
    };

    const handleCloseClick = (e) => {
        e.stopPropagation(); // Prevents triggering parent onClick events
        setShowPopup(false); // Hide the popup
        navigate('/'); // Navigate back to the homepage
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://192.168.1.37:5000/text-to-speech', { message, id });
            alert('Message sent successfully!');
            setMessage('');
            setShowPopup(false); // Hide the popup after sending
            navigate('/'); // Navigate back to the homepage
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const handleSpeechToText = () => {
        // Check if the browser supports SpeechRecognition
        if (!('webkitSpeechRecognition' in window)) {
            alert('Speech recognition not supported in this browser.');
            return;
        }

        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onstart = () => {
            setIsRecording(true);
        };

        recognition.onend = () => {
            setIsRecording(false);
        };

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript;
            setMessage(speechResult); // Set the recognized text as the message
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsRecording(false);
        };

        recognition.start();
    };

    return (
        <div className="text-message-container">
            <FaRegCommentDots onClick={handleIconClick} style={{ cursor: 'pointer', fontSize: '24px' }} />
            {showPopup && (
                <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                    <div className="popup-content">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message or speak..."
                                required
                                className="message-input"
                            />
                            <button
                                type="button"
                                onClick={handleSpeechToText}
                                className="speech-to-text-button"
                                disabled={isRecording}
                            >
                                {isRecording ? 'Listening...' : 'Speak'}
                            </button>
                            <div className="button-group">
                                <button type="button" onClick={handleCloseClick} className="close-button">
                                    Close
                                </button>
                                <button type="submit" className="submit-button">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextMessage;
