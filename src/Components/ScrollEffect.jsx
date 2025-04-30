import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import "../index.css";

function ScrollEffect() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const [leftVisible, setLeftVisible] = useState(false);
  const [rightVisible, setRightVisible] = useState(false);

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
      {
        threshold: 0.3, 
      }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <Container>
      <Row className="py-5">
      <Col md="6" className="d-flex justify-content-center">
  <div
    ref={leftRef}
    id="left-img"
    className={`fade-in-left ${leftVisible ? "visible" : ""}`}
  >
    <div className="custom-text-box">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium adipisci, rerum et amet repellat accusantium molestiae cumque ducimus doloribus commodi cupiditate deserunt magni nisi quas ex ab impedit, asperiores fuga.</p>
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
              src="https://th.bing.com/th/id/R.ab2d9a7ecb51718794b72294f5c91e78?rik=4g8D16HaMYsC4g&riu=http%3a%2f%2fpluspng.com%2fimg-png%2flaptop-png-laptop-png-image-6754-4042.png&ehk=1HZ%2bvEATuRwcDM7SldI%2fk2ckN4UsH1V3pABES7uw%2f7Y%3d&risl=&pid=ImgRaw&r=0"
              alt="Desde la derecha"
              className="img-fluid"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ScrollEffect;
