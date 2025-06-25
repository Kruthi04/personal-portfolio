import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/devLangImg.png";
import { useState, useEffect } from "react";

import projImg2 from "../assets/img/musicalChordImg.png";
import projImg3 from "../assets/img/crimeWareImg.png";
import colorSharp from "../assets/img/color-sharp.png";
import { AiFillCaretDown } from "react-icons/ai";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "DevLang",
      description:
        "Custom programming language inspired by Java and C with custom grammar, operators, and robust parsing using DCG.",
      imgUrl: projImg1,
      techStack: ["Python", "Prolog", "Git & GitHub", "VSCode", "ANTLR"],
      githubLink: "https://github.com/Kruthi04/DevLANG",
      detailsLink: "/project/devlang",
    },
    {
      title: "Musical Chord Detection",
      description:
        "A machine learning-powered tool that identifies traditional Indian melodies by analyzing musical patterns and structures.",
      imgUrl: projImg2,
      techStack: ["Python", "JavaScript", "MySQL", "pandas", "numpy"],
      githubLink:
        "https://github.com/Kruthi04/Machine-Learning-Driven-Musical-Chord-Detection",
      detailsLink: "/project/musical-chord-detection",
    },
    {
      title: "CrimeWare",
      description:
        "Semantic knowledge graph built with OWL and GraphDB to analyze crime patterns using advanced SPARQL queries.",
      imgUrl: projImg3,
      techStack: ["OWL Ontology", "GraphDB", "SPARQL", "React.js", "Azure"],
      githubLink: "https://github.com/Kruthi04/Integrated-Crime-Data-Analysis",
      detailsLink: "/project/crimeware",
    },
  ];

  const [hideArrow, setHideArrow] = useState(false);

  useEffect(() => {
    const section = document.getElementById("projects");

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
    <section className="project" id="projects" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Profile</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Experience</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Education</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Project</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      // id="slideInUp"
                      className="tab-pane-fixed-height"
                    >
                      <Tab.Pane eventKey="first" data-aos="zoom-in">
                        <Row className="justify-content-center align-items-stretch mb-5">
                          <Col md={4} className="text-start">
                            <div className="skill-bx wow zoomIn">
                              <h4>Software Developer</h4>
                              <h6>
                                Xmplar Management Solutions Private Limited
                              </h6>
                              <ul>
                                <li>
                                  Built and maintained RESTful APIs using Spring
                                  Boot
                                </li>
                                <li>
                                  Optimized performance and backend scalability
                                </li>
                                <li>
                                  Enhanced PostgreSQL query speed and efficiency
                                </li>
                                <li>
                                  Migrated ORM from iBatis to MyBatis for
                                  maintainability
                                </li>
                                <li>
                                  Wrote JUnit and Mockito tests to reduce bugs
                                </li>
                                <li>
                                  Used Git and Maven for version control and
                                  builds
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={4} className="text-center">
                            <div className="skill-bx wow zoomIn">
                              <h4>Fullstack Developer Intern</h4>
                              <h6>
                                Xmplar Management Solutions Private Limited
                              </h6>
                              <ul>
                                <li>
                                  Designed Flutter-based UIs to boost UX and
                                  retention
                                </li>
                                <li>
                                  Integrated frontend and backend for seamless
                                  API flow
                                </li>
                                <li>
                                  Improved performance through system-wide
                                  optimizations
                                </li>
                                <li>
                                  Applied Agile practices for faster feature
                                  delivery
                                </li>
                                <li>
                                  Enhanced product quality and maintainability
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={4} className="text-center">
                            <div className="skill-bx wow zoomIn">
                              <h4>Instructional Aide</h4>
                              <h6>Arizona State University</h6>
                              <ul>
                                <li>
                                  Led labs/tutorials for 80+ students in DBMS
                                </li>
                                <li>Simplified complex database concepts</li>
                                <li>
                                  Collaborated with faculty on teaching
                                  strategies
                                </li>
                                <li>
                                  Managed grading and feedback efficiently
                                </li>
                                <li>
                                  Supported academic engagement and progress
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second" data-aos="zoom-in">
                        <Row className="justify-content-center align-items-stretch mb-5">
                          <Col md={5} className="text-start">
                            <div
                              className="skill-bx wow zoomIn"
                              data-aos="zoom-in"
                            >
                              <h4>Masters in Computer Software Engineering</h4>
                              <h6> Arizona State University</h6>
                              <ul>
                                <li>
                                  Pursuing M.S. in Computer Software Engineering
                                  (GPA: 3.8)
                                </li>
                                <li>
                                  Gained expertise in secure systems and
                                  software architecture
                                </li>
                                <li>
                                  Built full-stack applications through academic
                                  and project work
                                </li>
                                <li>
                                  Strengthened practical skills via hands-on
                                  development tasks
                                </li>
                              </ul>
                            </div>
                          </Col>

                          <Col md={5} className="text-center">
                            <div
                              className="skill-bx wow zoomIn"
                              data-aos="zoom-in"
                            >
                              <h4>
                                Bachelors of Engineering - Information Science
                                and Engineering
                              </h4>
                              <h6>Visvevaraya Technological University</h6>
                              <ul>
                                <li>
                                  Graduated with B.E. in Information Science
                                  (GPA: 3.6)
                                </li>
                                <li>
                                  Tech Finalist for ML-based capstone project
                                </li>
                                <li>
                                  Published research in IRJCS (Computer Science
                                  Journal)
                                </li>
                                <li>
                                  Specialized in machine learning and applied
                                  research
                                </li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third" data-aos="zoom-in">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
      <div
        className={`scroll-down ${hideArrow ? "hidden" : ""}`}
        onClick={() => scrollToSection("skills")}
      >
        <AiFillCaretDown className="arrow" />
      </div>
    </section>
  );
};
