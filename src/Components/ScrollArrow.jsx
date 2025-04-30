import React, { useEffect, useState } from 'react';
import './ScrollArrow.css'; // Asegúrate de tener este archivo CSS

const ScrollArrow = () => {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const topWindow = window.scrollY;
      const position = 1 - (topWindow * 1.5) / window.innerHeight;
      setOpacity(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="arrow-wrap" style={{ opacity }}>
      <a href="#content">
        <span className="arrow"></span>
      </a>
    </div>
  );
};

export default ScrollArrow;
