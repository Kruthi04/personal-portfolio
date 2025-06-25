import { useParams } from "react-router-dom";
import projImg1 from "../assets/img/devLangImg.png";
import projImg2 from "../assets/img/musicalChordImg.png";
import projImg3 from "../assets/img/crimeWareImg.png";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const projectDetails = [
  {
    id: "devlang",
    title: "DevLang",
    description:
      "A custom programming language inspired by Java and C, designed to support essential constructs like loops, conditionals, and core data types for beginner-friendly language execution.",
    points: [
      "Designed grammar using Definite Clause Grammar (DCG) with structured syntax and custom operators.",
      "Implemented lexical analyzer, parser, and runtime for seamless command-line execution.",
      "Focused on robust error handling and clean AST generation for reliable code interpretation.",
    ],
    imgUrl: projImg1,
    techStack: ["Python", "Prolog", "Git & GitHub", "VSCode", "ANTLR"],
    githubLink: "https://github.com/Kruthi04/DevLANG",
  },
  {
    id: "musical-chord-detection",
    title: "Musical Chord Detection",
    description:
      "A machine learning-powered tool that identifies traditional Indian melodies by analyzing musical patterns and structures.",
    points: [
      "Achieved 96% accuracy by training on a diverse dataset using Python libraries like pandas, NumPy, and matplotlib.",
      "Integrated MySQL for structured data management and scalable storage.",
      "Combines audio pattern recognition with statistical modeling to decode harmonic progressions.",
    ],
    imgUrl: projImg2,
    techStack: ["Python", "JavaScript", "MySQL", "pandas", "numpy"],
    githubLink:
      "https://github.com/Kruthi04/Machine-Learning-Driven-Musical-Chord-Detection",
  },
  {
    id: "crimeware",
    title: "CrimeWare",
    description:
      "Semantic knowledge graph built with OWL and GraphDB to analyze crime patterns using advanced SPARQL queries.",
    points: [
      "Modeled ontologies in Protege and refined RDF data using OntoRefine.",
      "Queried GraphDB via SPARQL and built an interactive frontend in React.",
      "Deployed as a static web app on Microsoft Azure, streamlining access and updates through CI/CD automation.",
      "Delivered real-time data insights through linked data visualizations and knowledge graph analysis.",
    ],
    imgUrl: projImg3,
    techStack: ["OWL Ontology", "GraphDB", "SPARQL", "React.js", "Azure"],
    githubLink: "https://github.com/Kruthi04/Integrated-Crime-Data-Analysis",
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectDetails.find((p) => p.id === id);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) return <p>Project not found.</p>;

  return (
    <section className="projectDetails" id="details">
      <Container>
        {/* Title
         and Description */}
        <HashLink to="/#projects" className="btn btn-outline-light btn-sm ">
          ← Back
        </HashLink>
        <Row className="my-4">
          <Col>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            {project.points && (
              <ul>
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            )}
          </Col>
          <Col>
            <img
              src={project.imgUrl}
              alt={project.title}
              className="img-fluid mb-3 rounded"
              style={{ maxHeight: "300px", objectFit: "contain" }}
            />
          </Col>
        </Row>

        {/* Tech Stack */}
        <Row className="my-4">
          <Col>
            <h5>Tech Stack:</h5>
            <ul className="list-inline">
              {project.techStack.map((tech, i) => (
                <li
                  key={i}
                  className="list-inline-item badge bg-secondary me-2 mb-2"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* GitHub Link */}
        <Row>
          <Col>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark"
            >
              View GitHub
            </a>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="" src={colorSharp2}></img>
    </section>
  );
}
