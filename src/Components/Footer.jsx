import { useEffect, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./styles/footer.scss";
import whatsapp from "../assets/images/whatsapp-logo.svg"
import linkedin from "../assets/images/linkedin-logo.svg"
import github from "../assets/images/github-logo.svg"


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
};

function Footer() {
  return (
    <>
      <div>
        <h4>Juan Marcano ©</h4>
      </div>
      <div className="icons-footer">
        <a href="">
            <img src={github}/>
        </a>
        
        <img src={linkedin}/>
        <img src={whatsapp}/>
      </div>
    </>
  );
}

export default Footer;
