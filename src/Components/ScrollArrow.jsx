import React, { useState, useEffect } from 'react';
import './styles/ScrollArrow.css';

const ScrollArrow = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleClick = () => {
    const container = document.getElementById('container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        setIsHidden(true);
      }, 400); 
    }
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsHidden(false);
      }

      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else if (window.scrollY < lastScrollY) {
        setIsScrollingDown(false);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`rocket-wrapper ${isHidden || isScrollingDown ? 'hidden' : ''}`}
      onClick={handleClick}
    >
      <div className="rocket">
        <div className="rocket-body">
          <div className="body"></div>
          <div className="fin fin-left"></div>
          <div className="fin fin-right"></div>
          <div className="window"></div>
        </div>
        <div className="exhaust-flame"></div>
      </div>
    </div>
  );
};

export default ScrollArrow;
