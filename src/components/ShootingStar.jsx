import React, { useEffect, useState } from 'react';
import './ShootingStar.scss';

const ShootingStar = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const createStar = () => {
      const randomDelay = Math.random() * 5 + 1; // Random delay between 1 and 6 seconds
      const randomX = Math.random() * window.innerWidth; // Random X position
      const randomY = Math.random() * window.innerHeight; // Random Y position

      const star = {
        x: randomX,
        y: randomY,
      };

      setStars((prevStars) => [...prevStars, star]);

      setTimeout(() => {
        setStars((prevStars) => prevStars.filter((prevStar) => prevStar !== star));
      }, randomDelay * 1000);
    };

    const intervalId = setInterval(createStar, 2000); // Create stars every 2 seconds
    return () => clearInterval(intervalId);
  }, [stars]);

  return (
    <div className="shootingStar-container">
      {stars.map((star, index) => (
        <div
          key={index}
          className="shooting-star"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStar;
