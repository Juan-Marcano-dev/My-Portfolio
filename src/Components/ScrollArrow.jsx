import { useEffect, useState } from 'react';
import './styles/ScrollArrow.scss';


const ScrollArrow = () => {
  const [isVisible, setIsVisible] = useState(true);

  

  const handleClick = () => {
    const container = document.getElementById('container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return isVisible ? (
    <div className='rocket-container'>
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
    </div>
  ) : null;
};

export default ScrollArrow;
