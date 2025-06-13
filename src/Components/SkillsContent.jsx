import { useEffect, useRef, useState } from "react";
import "./styles/skillsContent.scss";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import react from "../assets/images/react.svg";
import sass from "../assets/images/sass.svg";
import javascript from "../assets/images/javascript.svg";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const SkillsContent = () => {
  const titleRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.1 } 
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <section className="skills-section">
      <h2
        ref={titleRef}
        className={`animate__animated ${animate ? "animate__zoomIn animate__duration-2s" : ""}`}
        style={{ opacity: animate ? 1 : 0 }}
      >
        My Skills
      </h2>

      <div className="skills-icons">
        <img data-tooltip-id="my-tooltip"
  data-tooltip-content="HTML" src={html} alt="HTML"/>
        <img  data-tooltip-id="my-tooltip"
  data-tooltip-content="CSS" src={css} alt="CSS" />
        <img  data-tooltip-id="my-tooltip"
  data-tooltip-content="BootStrap" src={bootstrap} alt="Bootstrap" />
        <img  data-tooltip-id="my-tooltip"
  data-tooltip-content="React" src={react} alt="React" />
        <img  data-tooltip-id="my-tooltip"
  data-tooltip-content="Sass" src={sass} alt="Sass" />
        <img  data-tooltip-id="my-tooltip"
  data-tooltip-content="JavaScript" src={javascript} alt="JavaScript" />
        
  <Tooltip id="my-tooltip" place="top"
  className="custom-tooltip"
  style={{
    backgroundColor: "#0b0c10",       
    color: "#f8f9fa",                 
    borderRadius: "10px",
    padding: "10px 14px",
    fontSize: "14px",
    fontWeight: "bold",
    boxShadow: "0 0 12px #0c1d54",  
    zIndex: 1000
  }} />
      </div>
    </section>
  );
};

export default SkillsContent;
