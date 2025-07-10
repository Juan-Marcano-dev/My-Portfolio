import { motion } from "framer-motion";
import "./styles/BoxProjects.scss";
import imgProject1 from "../assets/images/img-project-1.png";
import imgProject2 from "../assets/images/img-project-2.png";

const BoxProjects = () => {
  return (
    <>
      <motion.h3
        className="tittle"
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Projects
      </motion.h3>

      <article className="box-projects-wrapper">
        <motion.section
          className="card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-content">
            <h3>Quizz Game</h3>
            <p>
              In this app I make use of my React, JavaScript, HTML, CSS, Sass
              and API consumption skills to create a scalable, neat and fully
              functional app including a score system that is stored locally.
            </p>
            <div>
              <a href="https://juan-marcano-dev.github.io/Quiz-Game-React/">
                Test
              </a>
              <a href="https://github.com/Juan-Marcano-dev/Quiz-Game-React">
                Code
              </a>
            </div>
          </div>
          <div className="visual">
            <img src={imgProject1} alt="Project 1" className="project-image" />
          </div>
        </motion.section>

        <motion.section
          className="card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-content">
            <h3>Dynamic Character Viewer With Rick and Morty API</h3>
            <p>
              In this application, I apply my skills in React, JavaScript, and
              API consumption to create a dynamic character search engine based
              on the Rick and Morty universe. I implemented custom pagination
              logic, efficiently managed component state, and designed an
              interface in line with the style of the series.
            </p>
            <div>
              <a href="https://juan-marcano-dev.github.io/RickAndMorty-API/">
                Test
              </a>
              <a href="https://github.com/Juan-Marcano-dev/RickAndMorty-API">
                Code
              </a>
            </div>
          </div>
          <div className="visual">
            <img src={imgProject2} alt="Project 2" className="project-image" />
          </div>
        </motion.section>
      </article>
    </>
  );
};

export default BoxProjects;
