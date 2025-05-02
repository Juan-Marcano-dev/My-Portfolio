
import React from 'react';
import './styles.css/ScrollArrow.css';

const Rocket = () => {
  const scrollToHeader = () => {
    const header = document.getElementById('main-header');
    if (header) {
      header.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="rocket-wrapper" onClick={scrollToHeader} style={{ cursor: 'pointer' }}>
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

export default Rocket;
