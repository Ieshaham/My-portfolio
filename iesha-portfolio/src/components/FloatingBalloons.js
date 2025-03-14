import React, { useState, useEffect } from 'react';

const FloatingBalloon = ({ id, onPop }) => {
  // Random starting position and animation properties
  const startX = Math.random() * 100; // random horizontal position (%)
  const floatDuration = 15 + Math.random() * 20; // random float duration (15-35s)
  const balloonSize = 50 + Math.random() * 30; // random size (50-80px)
  const wobbleAmount = Math.random() * 10 + 5; // random wobble (5-15px)
  
  const [popped, setPopped] = useState(false);
  
  const handleClick = () => {
    if (!popped) {
      setPopped(true);
      // Play pop sound (optional)
      const popSound = new Audio('/pop-sound.mp3'); // You'll need to add this sound file
      popSound.volume = 0.3;
      popSound.play().catch(err => console.log('Audio play error:', err));
      
      // Tell parent to remove this balloon after animation
      setTimeout(() => {
        onPop(id);
      }, 500);
    }
  };

  return (
    <div
      className={`floating-balloon ${popped ? 'popped' : ''}`}
      onClick={handleClick}
      style={{
        left: `${startX}vw`,
        width: `${balloonSize}px`,
        height: `${balloonSize * 1.2}px`,
        animationDuration: `${floatDuration}s`,
        animationDelay: `${Math.random() * 5}s`,
        animationName: `float-${id % 3}`, // Use different float animations
      }}
    >
      <img 
         src={`${process.env.PUBLIC_URL}/balloon.png`} 
        alt="balloon" 
        className="balloon-image"
      />
    </div>
  );
};

const FloatingBalloons = () => {
  const [balloons, setBalloons] = useState([]);
  const [balloonCounter, setBalloonCounter] = useState(0);
  
  // Create a new balloon every few seconds
  useEffect(() => {
    const createInterval = setInterval(() => {
      if (balloons.length < 15) { // Limit total number of balloons
        setBalloonCounter(prev => prev + 1);
        setBalloons(prev => [...prev, balloonCounter]);
      }
    }, 2000); // Create a new balloon every 2 seconds
    
    return () => clearInterval(createInterval);
  }, [balloons, balloonCounter]);
  
  // Remove popped balloons
  const handlePopBalloon = (id) => {
    setBalloons(prev => prev.filter(balloonId => balloonId !== id));
  };
  
  return (
    <div className="balloons-container">
      {balloons.map(id => (
        <FloatingBalloon key={id} id={id} onPop={handlePopBalloon} />
      ))}
    </div>
  );
};

export default FloatingBalloons;