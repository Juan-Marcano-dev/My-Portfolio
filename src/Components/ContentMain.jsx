import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion, useInView } from "framer-motion";
import "./styles/ContentMain.scss";
import personalImg from "../assets/images/personal-img.png";

function ScrollEffect({ containerRef }) {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, {
    threshold: 0.3,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "left-img") {
            setLeftVisible(entry.isIntersecting);
          }
          if (entry.target.id === "right-img") {
            setRightVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <>
      <motion.h3
        id="aboutMe"
        ref={titleRef}
        className="title"
        initial={{ opacity: 0, y: 40 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        About Me
      </motion.h3>

      <Container>
        <Row className="py-5">
          <Col md="6" className="d-flex justify-content-center">
            <div
              ref={leftRef}
              id="left-img"
              className={`fade-in-left ${leftVisible ? "visible" : ""}`}
            >
              <div
                className="custom-text-box"
                id="container"
                ref={containerRef}
              >
                <p className="aboutMe">
                  "I am a frontend developer with a clear passion:
                  creating experiences that not only look good, but feel good. I
                  like to pay attention to detail, understand the “why” behind
                  things, and not settle for something that simply works—I want
                  it to have purpose. I have worked on personal projects where I
                  combine animations, attractive design, and functional logic
                  using React, SCSS, and modern JavaScript. I don't just follow
                  tutorials: I like to modify, break, and rebuild until I
                  thoroughly understand what I'm doing. Beyond the code, I care
                  about communicating, receiving feedback, and improving with
                  each iteration. I am hungry to learn, have good judgment when
                  making decisions, and have the peace of mind of knowing that,
                  even though I don't know everything, I have the discipline and
                  curiosity to find out. "
                </p>
              </div>
            </div>
          </Col>

          <Col md="6" className="d-flex justify-content-center">
            <div
              ref={rightRef}
              id="right-img"
              className={`fade-in-right ${rightVisible ? "visible" : ""}`}
            >
              <img
                src={personalImg}
                alt="Desde la derecha"
                loading="lazy"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ScrollEffect;
