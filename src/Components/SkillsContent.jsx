import "./styles/skillsContent.scss";
import html from "../assets/images/html5.svg";
import css from "../assets/images/css.svg";
import bootstrap from "../assets/images/bootstrap.svg";
import react from "../assets/images/react.svg";
import sass from "../assets/images/sass.svg";
import javascript from "../assets/images/javascript.svg";

const skills = [
  { name: "HTML", logo: html },
  { name: "CSS", logo: css },
  { name: "Bootstrap", logo: bootstrap },
  { name: "React", logo: react },
  { name: "Sass", logo: sass },
  { name: "JavaScript", logo: javascript },
];

const SkillsContent = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-icons">
        {skills.map((skill) => (
          <img
            key={skill.name}
            src={skill.logo}
            alt={`${skill.name} logo`}
            title={skill.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsContent;
