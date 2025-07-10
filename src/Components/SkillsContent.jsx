import { useEffect, useRef, useState } from "react";
import "./styles/skillsContent.scss";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import react from "../assets/images/react.svg";
import sass from "../assets/images/sass.svg";
import javascript from "../assets/images/javascript.svg";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const SkillsContent = () => {
  const titleRef = useRef(null);
  const iconsRef = useRef(null);

  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateIcons, setAnimateIcons] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateTitle(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setAnimateIcons(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (iconsRef.current) observer.observe(iconsRef.current);

    return () => {
      if (iconsRef.current) observer.unobserve(iconsRef.current);
    };
  }, []);

  return (
    <section className="skills-section">
      <h2
      id="skills"
        ref={titleRef}
        className={`animate__animated ${
          animateTitle ? "animate__zoomIn animate__duration-2s" : ""
        }`}
        style={{ opacity: animateTitle ? 1 : 0 }}
      >
        My Skills
      </h2>

      <div
        ref={iconsRef}
        className={`skills-icons animate__animated ${
          animateIcons ? "animate__zoomIn animate__duration-2s" : ""
        }`}
        style={{ opacity: animateIcons ? 1 : 0 }}
      >
        <a
          href="https://developer.mozilla.org/es/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="HTML"
            src={html}
            alt="HTML"
            loading="lazy"
          />
        </a>
        <a
          href="https://developer.mozilla.org/es/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="CSS"
            src={css}
            alt="CSS"
            loading="lazy"
          />
        </a>
        <a
          href="https://getbootstrap.com/docs/4.1/getting-started/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Bootstrap"
            src={bootstrap}
            alt="Bootstrap"
            loading="lazy"
          />
        </a>

        <a
          href="https://es.react.dev/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="React"
            src={react}
            alt="React"
            loading="lazy"
          />
        </a>
        <a
          href="https://sass-lang.com/documentation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Sass"
            src={sass}
            alt="Sass"
            loading="lazy"
          />
        </a>
        <a
          href="https://developer.mozilla.org/es/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            data-tooltip-id="my-tooltip"
            data-tooltip-content="JavaScript"
            src={javascript}
            alt="JavaScript"
            loading="lazy"
          />
        </a>

        <Tooltip id="my-tooltip" place="top" className="custom-tooltip" />
      </div>
    </section>
  );
};

export default SkillsContent;
