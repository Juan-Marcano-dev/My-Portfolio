import { useEffect, useState } from 'react';
import './styles/ScrollArrow.scss';


const ScrollArrow = ({handleScrollToContentMain}) => {


  const handleClick = () => {
    const container = document.getElementById('container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' , block: 'center', });
    }
  };

  return  (
    <div className='rocket-container'>
    <div className="rocket-wrapper" onClick={handleScrollToContentMain}>
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
  );
};

export default ScrollArrow;
