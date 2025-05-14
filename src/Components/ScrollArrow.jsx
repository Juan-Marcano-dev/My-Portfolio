import React from 'react';
import './styles/ScrollArrow.scss';

const ScrollArrow = () => {
  const handleClick = () => {

    const container = document.getElementById('container');
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="rocket-wrapper" onClick={handleClick}>
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
