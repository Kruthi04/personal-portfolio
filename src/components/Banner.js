import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { AiFillCaretDown } from "react-icons/ai";
import "animate.css";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(30);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Developer",
    "Full-Stack Engineer",
    "React & Spring Boot Developer",
    "Flutter Enthusiast",
    "API Optimization Specialist",
    "Java & Node.js Coder",
  ];
  const period = 2000;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(15);
    } else {
      setDelta(30);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(1200);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHideArrow(true);
      } else {
        setHideArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setHideArrow(true);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline" div data-aos="fade-up">
                    Welcome to my Portfolio
                  </span>
                  <h1>{`Hi! I'm Kruthi`} </h1>
                  <h2>
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Software Developer", "Frontend Developer", "Backend Developer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h2>
                  <p>
                    Full-stack software developer building clean, scalable web
                    apps with Java, React & Spring Boot—fueled by code,
                    creativity, and lots of coffee ☕
                  </p>
                  <button onClick={() => scrollToSection("connect")}>
                    Let’s Connect
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <div
        className={`scroll-down ${hideArrow ? "hidden" : ""}`}
        onClick={() => scrollToSection("about")}
      >
        <AiFillCaretDown className="arrow" />
      </div>
    </section>
  );
};
