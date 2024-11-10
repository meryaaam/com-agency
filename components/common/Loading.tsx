"use client";

import React from 'react';

const Loading: React.FC = () => {
  const wrapperStyle: React.CSSProperties = {
    width: '200px',
    height: '60px',
    position: 'relative',
    zIndex: 1,
  };

  const circleStyle: React.CSSProperties = {
    width: '20px',
    height: '20px',
    position: 'absolute',
    borderRadius: '50%',
    backgroundColor: '#874',
    left: '15%',
    transformOrigin: '50%',
    animation: 'circle7124 0.5s alternate infinite ease',
  };

  const shadowStyle: React.CSSProperties = {
    width: '20px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    position: 'absolute',
    top: '62px',
    transformOrigin: '50%',
    zIndex: -1,
    left: '15%',
    filter: 'blur(1px)',
    animation: 'shadow046 0.5s alternate infinite ease',
  };

  return (
    <div style={wrapperStyle}>
      <div style={{ ...circleStyle }} />
      <div style={{ ...circleStyle, left: '45%', animationDelay: '0.2s' }} />
      <div style={{ ...circleStyle, left: 'auto', right: '15%', animationDelay: '0.3s' }} />

      <div style={{ ...shadowStyle }} />
      <div style={{ ...shadowStyle, left: '45%', animationDelay: '0.2s' }} />
      <div style={{ ...shadowStyle, left: 'auto', right: '15%', animationDelay: '0.3s' }} />

      <style>
        {`
          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }
            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }
            100% {
              top: 0%;
            }
          }

          @keyframes shadow046 {
            0% {
              transform: scaleX(1.5);
            }
            40% {
              transform: scaleX(1);
              opacity: 0.7;
            }
            100% {
              transform: scaleX(0.2);
              opacity: 0.4;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
