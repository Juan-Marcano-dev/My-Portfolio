import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/footer.scss";
import whatsapp from "../assets/images/whatsapp-logo.svg";
import linkedin from "../assets/images/linkedin-logo.svg";
import github from "../assets/images/github-logo.svg";

function Footer() {
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
    <footer
      ref={titleRef}
      className={`animate__animated ${
        animate ? "animate__zoomIn animate__duration-2s" : ""
      }`}
      style={{ opacity: animate ? 1 : 0 }}
    >
      <div>
        <h4>Juan Marcano ©</h4>
      </div>
      <div className="icons-footer">
        <a href="https://github.com/Juan-Marcano-dev" target="_blank" rel="noreferrer">
          <img src={github} alt="GitHub" loading="lazy" />
        </a>
        <a href="https://www.linkedin.com/in/juan-marcano-07146b372/" target="_blank" rel="noreferrer">
          <img src={linkedin} alt="LinkedIn" loading="lazy" />
        </a>
        <a href="https://wa.me/+51930552074" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="WhatsApp" loading="lazy" />
        </a>
      </div>
      <div className="logo-end">&lt;/JCMR&gt;</div>
    </footer>
  );
}

export default Footer;
