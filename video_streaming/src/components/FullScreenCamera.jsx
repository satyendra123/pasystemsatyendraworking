import React from 'react';
import { useNavigate } from 'react-router-dom';

const FullScreenCamera = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Navigate back to the previous page
  };

  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      backgroundColor: 'black', 
      position: 'absolute', // Ensure it's positioned absolutely
      top: 0, 
      left: 0, 
      zIndex: 9999 // Ensure it sits on top of everything
    }}>
      <img 
        src="http://127.0.0.1:5000/video_feed" 
        alt="IP Camera Stream"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <button 
        onClick={handleClose} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '10px',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 10000 // Ensure button is on top of the video
        }}
      >
        Close
      </button>
    </div>
  );
};

export default FullScreenCamera;
