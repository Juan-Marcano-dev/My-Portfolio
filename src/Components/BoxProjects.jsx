import { useEffect, useRef, useState } from "react";
import './styles/BoxProjects.scss';
import imgProject1 from '../assets/images/img-project-1.png';
import imgProject2 from '../assets/images/img-project-2.png';

const BoxProjects = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.target === ref1.current) {
          setVisible1(entry.isIntersecting);
        }
        if (entry.target === ref2.current) {
          setVisible2(entry.isIntersecting);
        }
      });
    },
    { threshold: 0.3 }
  );

  if (ref1.current) observer.observe(ref1.current);
  if (ref2.current) observer.observe(ref2.current);

  return () => {
    if (ref1.current) observer.unobserve(ref1.current);
    if (ref2.current) observer.unobserve(ref2.current);
  };
}, []);


  return (
    <article>
      <section
        ref={ref1}
        className={`card fade-in-right ${visible1 ? "visible" : ""}`}
      >
        <div className="text-content">
          <h3>Quizz Game</h3>
          <p>
            In this app I make use of my React, JavaScript, HTML, CSS, Sass and API consumption skills to create a scalable, neat and fully functional app including a score system that is stored locally.
          </p>
          <a href="https://juan-marcano-dev.github.io/Quiz-Game-React/">Join now</a>
        </div>
        <div className="visual">
          <img src={imgProject1} alt="" className="project-image" />
        </div>
      </section>

      <section
        ref={ref2}
        className={`card fade-in-left ${visible2 ? "visible" : ""}`}
      >
        <div className="text-content">
          <h3>Dynamic Character Viewer With Rick and Morty API</h3>
          <p>
            In this application, I apply my skills in React, JavaScript, and API consumption to create a dynamic character search engine based on the Rick and Morty universe. I implemented custom pagination logic, efficiently managed component state, and designed an interface in line with the style of the series, achieving a clean, scalable, and interactive experience.
          </p>
          <a href="https://juan-marcano-dev.github.io/RickAndMorty-API/">Join now</a>
        </div>
        <div className="visual">
          <img src={imgProject2} alt="" className="project-image" />
        </div>
      </section>
    </article>
  );
};

export default BoxProjects;
