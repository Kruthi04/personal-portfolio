import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/devLangImg.png";
import projImg2 from "../assets/img/musicalChordImg.png";
import projImg3 from "../assets/img/crimeWareImg.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import ProjectDetails from "./ProjectDetails";
import { AiFillCaretDown } from "react-icons/ai";
//import 'animate.css';
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="project" id="projects">
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
                  <h2>Projects</h2>
                  <p className="project-one-liner">
                    Practical implementations of my skills in software
                    engineering, from frontend interfaces to backend systems.
                  </p>
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
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first" data-aos="zoom-in">
                        <Row className="justify-content-center align-items-stretch mb-5">
                          <Col md={4} className="text-start">
                            <div className="skill-bx wow zoomIn">
                              <h4>Software Developer</h4>
                              <h6>
                                Xmplar Management Solutions Private Limited
                              </h6>
                              <p>
                                At Xmplar, I developed and maintained RESTful
                                APIs using Spring Boot, focusing on performance
                                optimization and system scalability. I enhanced
                                database performance by optimizing PostgreSQL
                                queries and transitioning from iBatis to
                                MyBatis. I also implemented JUnit and Mockito
                                tests to reduce production bugs and utilized Git
                                and Maven for efficient version control and
                                deployment.
                              </p>
                            </div>
                          </Col>

                          <Col md={4} className="text-center">
                            <div className="skill-bx wow zoomIn">
                              <h4>Fullstack Developer Intern</h4>
                              <h6>
                                Xmplar Management Solutions Private Limited
                              </h6>
                              <p>
                                As a full-stack intern, I designed and
                                implemented Flutter-based UIs to improve user
                                experience and app retention. I integrated
                                front-end and back-end systems to streamline
                                communication and API performance. By applying
                                Agile methodologies, I contributed to faster
                                feature delivery and improved overall product
                                quality and maintainability.
                              </p>
                            </div>
                          </Col>

                          <Col md={4} className="text-center">
                            <div className="skill-bx wow zoomIn">
                              <h4>Instructional Aide</h4>
                              <h6>Arizona State University</h6>
                              <p>
                                I currently serve as an Instructional Aide for
                                the Database Management Systems course, where I
                                lead labs and tutorials for over 80 students. I
                                focus on simplifying complex database concepts
                                and collaborate with faculty to refine
                                instructional strategies. I also handle timely
                                grading and feedback to support academic
                                progress and engagement.
                              </p>{" "}
                              {"  "}
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
                              <p>
                                Currently pursuing my Master&apos;s degree with
                                a GPA of 3.8. The program has strengthened my
                                expertise in secure systems, software
                                architecture, and full-stack development through
                                both academic and hands-on project work.
                              </p>
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
                              <p>
                                Graduated with a GPA of 3.6. Recognized as a
                                Tech Finalist for my capstone project in the
                                Machine Learning department and published
                                research in the International Research Journal
                                of Computer Science (IRJCS).
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {/* <Col md={4} className="text-start">
                            <div
                              className="skill-bx wow zoomIn"
                              data-aos="zoom-in"
                            >
                              <h4>DevLANG</h4>
                              <h6> Arizona State University</h6>
                              <p>
                                <p>
                                  A custom programming language inspired by Java
                                  and C, designed to support essential
                                  constructs like loops, conditionals, and core
                                  data types for beginner-friendly language
                                  execution.
                                  <ul>
                                    <li>
                                      Designed grammar using Definite Clause
                                      Grammar
                                    </li>
                                    <li>
                                      (DCG) with structured syntax and custom
                                      operators.{" "}
                                    </li>
                                    <li>
                                      Implemented lexical analyzer, parser, and
                                      runtime for seamless command-line
                                      execution.
                                    </li>
                                    <li>
                                      Focused on robust error handling and clean
                                      AST generation for reliable code
                                      interpretation.
                                    </li>
                                  </ul>
                                </p>
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="text-start">
                            <div
                              className="skill-bx wow zoomIn"
                              data-aos="zoom-in"
                            >
                              <h4>Musical Chord detection</h4>
                              <h6> Custom programming language development</h6>
                              <p>
                                A machine learning-based system that detects
                                complex musical chord structures with high
                                precision, enhancing computational analysis of
                                songs.
                                <ul>
                                  <li>
                                    Achieved 96% accuracy by training on a
                                    diverse dataset using Python libraries like
                                    pandas, NumPy, and matplotlib.
                                  </li>
                                  <li>
                                    Integrated MySQL for structured data
                                    management and scalable storage.
                                  </li>
                                  <li>
                                    Combines audio pattern recognition with
                                    statistical modeling to decode harmonic
                                    progressions.
                                  </li>
                                </ul>
                              </p>
                            </div>
                          </Col>
                          <Col md={4} className="text-start">
                            <div
                              className="skill-bx wow zoomIn"
                              data-aos="zoom-in"
                            >
                              <h4>Integrated Crime Data Analysis</h4>
                              <h6>
                                Semantic Knowledge Graph Development for Crime
                                Analysis
                              </h6>
                              <p>
                                A full-stack crime analysis platform that fuses
                                semantic web tools with frontend visualization
                                to identify and track crime hotspots and
                                patterns.
                                <ul>
                                  <li>
                                    Modeled ontologies in Protege and refined
                                    RDF data using OntoRefine.
                                  </li>
                                  <li>
                                    Queried GraphDB via SPARQL and built an
                                    interactive frontend in React.{" "}
                                  </li>
                                  <li>
                                    Deployed as a static web app on Microsoft
                                    Azure, streamlining access and updates
                                    through CI/CD automation.
                                  </li>
                                  <li>
                                    Delivered real-time data insights through
                                    linked data visualizations and knowledge
                                    graph analysis.
                                  </li>
                                </ul>
                              </p>
                            </div>
                          </Col> */}

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
      <img className="background-image-right" src={colorSharp2}></img>
      <div className="scroll-down" onClick={() => scrollToSection("skills")}>
        <AiFillCaretDown className="arrow" />
      </div>
    </section>
  );
};
