import React from "react";

const WaveDown = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <defs>
    <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="#a855f7" /> 
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>
  </defs>
        <path
          fill="url(#gradient)"
          fill-opacity="1"
          d="M0,64L34.3,64C68.6,64,137,64,206,85.3C274.3,107,343,149,411,154.7C480,160,549,128,617,149.3C685.7,171,754,245,823,240C891.4,235,960,149,1029,117.3C1097.1,85,1166,107,1234,117.3C1302.9,128,1371,128,1406,128L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default WaveDown;
