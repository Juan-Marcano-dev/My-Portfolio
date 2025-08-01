import { useEffect, useState } from "react";
import "./styles/StarsBackground.scss";
import GravityText from "./GravityText";

function StarsBackground() {
  const [layers, setLayers] = useState({});

  useEffect(() => {
    const width = window.innerWidth;
    const height = Math.max(document.body.scrollHeight, window.innerHeight);

    const generateStars = (count, size, durationBase) => {
      return Array.from({ length: count }).map((_, i) => ({
        id: `${size}-${i}`,
        size,
        x: Math.floor(Math.random() * width),
        y: Math.floor(Math.random() * height),
        duration: durationBase + Math.random() * 30,
        delay: Math.random() * 10,
      }));
    };

    setLayers({
      small: generateStars(15, 1, 50),
      medium: generateStars(30, 2, 100),
      big: generateStars(45, 3, 150),
    });
  }, []);

  return (
    <div className="stars-container">
      {Object.entries(layers).map(([layerName, stars]) =>
        stars.map((star) => (
          <div
            key={star.id}
            className={`star ${layerName}`}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.x}px`,
              top: `${star.y}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))
      )}

      <div id="title">
        <span id="title-1">Portfolio</span>
        <br />
        <span id="title-2">Juan Marcano</span>
      </div>
      <GravityText />
    </div>
  );
}

export default StarsBackground;
