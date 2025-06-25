import "react-multi-carousel/lib/styles.css";
import { Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import { AiFillCaretDown } from "react-icons/ai";
import profile from "../assets/img/profile-bg.PNG";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";

// import Image from "next/image";

export const About = () => {
  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const section = document.getElementById("about");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHideArrow(false);
        } else {
          setHideArrow(true);
        }
      },
      { threshold: 0.6 }
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setHideArrow(true);
    }
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="skill-bx wow zoomIn">
          <Row className="align-items-center" data-aos="fade-up">
            {/* Left: Text */}
            <Col md={7} className="text-start">
              <h2>About</h2>
              <p>
                I&apos;m Kruthi Hosamane, a software developer with industry
                experience in building full-stack applications using Java,
                Spring Boot, React, Flutter, and PostgreSQL. With a strong
                foundation in object-oriented programming and system design,
                I&apos;ve developed scalable REST APIs, optimized backend
                performance, and created responsive user interfaces that enhance
                usability and performance. From streamlining deployments and
                improving response times, to crafting intuitive front-ends and
                deploying cloud-ready applications, I bring both technical depth
                and a user-centered approach to every project. Passionate about
                clean code, continuous learning, and delivering meaningful
                digital experiences.
              </p>
            </Col>

            {/* Right: Image */}
            <Col md={5} className="text-center">
              <img
                src={profile}
                alt="Profile"
                className="img-fluid about-profile-img"
              />
            </Col>
          </Row>
        </div>
      </div>

      <img className="background-image-left" src={colorSharp} alt="" />
      <div
        className={`scroll-down ${hideArrow ? "hidden" : ""}`}
        onClick={() => scrollToSection("projects")}
      >
        <AiFillCaretDown className="arrow" />
      </div>
    </section>
  );
};
