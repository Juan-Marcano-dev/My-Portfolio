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
          />
        </a>

        <Tooltip
          id="my-tooltip"
          place="top"
          className="custom-tooltip"
          style={{
            backgroundColor: "#0b0c10",
            color: "#f8f9fa",
            borderRadius: "10px",
            padding: "10px 14px",
            fontSize: "14px",
            fontWeight: "bold",
            boxShadow: "0 0 12px #0c1d54",
            zIndex: 1000,
          }}
        />
      </div>
    </section>
  );
};

export default SkillsContent;
