import React, { useState, useEffect } from 'react';
import './styles/ScrollArrow.css';

const ScrollArrow = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  const handleClick = () => {
    console.log('Click en el cohete');
    setIsHidden(true); // El cohete desaparece

    setTimeout(() => {
      const container = document.getElementById('container');
      if (container) {
        console.log('Desplazándose hacia el contenedor');
        container.scrollIntoView({ behavior: 'smooth' });
      }
    }, 700); // Espera un poco para que el cohete desaparezca antes de hacer scroll
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      console.log('Scroll detectado', window.scrollY);
      
      // Detectamos si estamos en la parte superior
      if (window.scrollY === 0) {
        console.log('Volviendo a la parte superior');
        setIsHidden(false); // El cohete vuelve a aparecer cuando se está en la parte superior
      }

      // Detectamos si se está desplazando hacia abajo
      if (window.scrollY > lastScrollY) {
        if (!isScrollingDown) {
          console.log('Comenzando a bajar');
        }
        setIsScrollingDown(true); // Está bajando
      } else if (window.scrollY < lastScrollY) {
        if (isScrollingDown) {
          console.log('Comenzando a subir');
        }
        setIsScrollingDown(false); // Está subiendo
      }

      lastScrollY = window.scrollY; // Actualiza la última posición del scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrollingDown]);

  return (
    <div
      className={`rocket-wrapper ${isHidden ? 'hidden' : ''} ${isScrollingDown ? 'disappear' : ''}`}
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
