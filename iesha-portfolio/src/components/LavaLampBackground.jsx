import React, { useEffect } from 'react';


const LavaLampBackground = () => {
  useEffect(() => {
    const blobs = document.querySelectorAll('.blob');

    // Function to generate random positions and sizes
    const randomizeBlobs = () => {
      blobs.forEach((blob) => {
        const size = Math.random() * 200 + 100; // Random size between 100px and 300px
        const x = Math.random() * (window.innerWidth - 200); // Ensure blobs stay within the screen
        const y = Math.random() * (window.innerHeight - 200);

        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        blob.style.left = `${x}px`;
        blob.style.top = `${y}px`;
      });
    };

    // Randomize blobs on component mount
    randomizeBlobs();

    // Re-randomize blobs every 10 seconds for dynamic movement
    const interval = setInterval(randomizeBlobs, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lava-lamp-background">
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <div className="blob"></div>
    </div>
  );
};

export default LavaLampBackground;