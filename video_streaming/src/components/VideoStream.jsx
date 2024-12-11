/*
import React, { useState, useRef, useCallback } from 'react';

const VideoStream = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef(null);

  const handleFullScreenToggle = useCallback(() => {
    if (!isFullScreen) {
      setIsFullScreen(true);
    }
  }, [isFullScreen]);

  const handleClick = (e) => {
    // Only toggle full-screen if clicking on the container but not the speaker button
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      handleFullScreenToggle();
    }
  };


  return (
    <div  ref={containerRef}  style={{ 
        position: 'relative', 
        width: isFullScreen ? '100vw' : '100%', 
        height: isFullScreen ? '100vh' : '50vh',
        cursor: isFullScreen ? 'default' : 'pointer' 
      }} 
      onClick={handleClick} >
      <img src="http://127.0.0.1:5000/video_feed" alt="Video Stream" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

    </div>
  );
};

export default VideoStream;
*/
import React, { useState, useRef, useCallback } from 'react';

const VideoStream = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const containerRef = useRef(null);

  const handleFullScreenToggle = useCallback(() => {
    if (!isFullScreen) {
      setIsFullScreen(true);
    }
  }, [isFullScreen]);

  const handleClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      handleFullScreenToggle();
    }
  };

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: isFullScreen ? '100vw' : '100%',
        height: isFullScreen ? '100vh' : '50vh',
        cursor: isFullScreen ? 'default' : 'pointer',
        overflow: 'hidden',
      }}
      onClick={handleClick}
    >
      <img
        src="http://127.0.0.1:5000/video_feed"
        alt="Video Stream"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1, // Background video
        }}
      />
    </div>
  );
};

export default VideoStream;
