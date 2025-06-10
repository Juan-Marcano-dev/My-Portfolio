import { useEffect, useRef, useState } from "react";
import "./styles/skillsContent.scss";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import react from "../assets/images/react.svg";
import sass from "../assets/images/sass.svg";
import javascript from "../assets/images/javascript.svg";

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
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={bootstrap} alt="Bootstrap" />
        <img src={react} alt="React" />
        <img src={sass} alt="Sass" />
        <img src={javascript} alt="JavaScript" />
      </div>
    </section>
  );
};

export default SkillsContent;
