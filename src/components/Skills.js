import "react-multi-carousel/lib/styles.css";
import myImage from "../assets/img/mockito-transparent.png";
import { DiProlog } from "react-icons/di";
import colorSharp from "../assets/img/color-sharp.png";
import React from "react";

import {
  FaPython,
  FaJsSquare,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiC,
  SiFlask,
  SiExpress,
  SiFlutter,
  SiSpringboot,
  SiJunit5,
  SiIntellijidea,
  SiPostman,
  SiSpring,
  SiMongodb,
  SiPostgresql,
  SiJira,
  SiNextdotjs,
  SiEclipseide,
  SiGraphql,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython style={{ color: "#3776AB" }} /> },
  { name: "JavaScript", icon: <FaJsSquare style={{ color: "#F7DF1E" }} /> },
  { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178C6" }} /> },
  { name: "Java", icon: <FaJava style={{ color: "#007396" }} /> },
  { name: "C", icon: <SiC style={{ color: "#A8B9CC" }} /> },
  { name: "CSS", icon: <FaCss3Alt style={{ color: "#1572B6" }} /> },
];

const technicalTools = [
  { name: "Flask", icon: <SiFlask style={{ color: "#000000" }} /> },
  { name: "Express.js", icon: <SiExpress style={{ color: "#000000" }} /> },
  { name: "React", icon: <FaReact style={{ color: "#61DBFB" }} /> },
  { name: "Node.js", icon: <FaNodeJs style={{ color: "#339933" }} /> },
  { name: "Next.js", icon: <SiNextdotjs style={{ color: "#ffffff" }} /> },
  { name: "Flutter", icon: <SiFlutter style={{ color: "#02569B" }} /> },
  { name: "Spring Boot", icon: <SiSpringboot style={{ color: "#6DB33F" }} /> },
  { name: "JUnit", icon: <SiJunit5 style={{ color: "#25A162" }} /> },
  { name: "Git", icon: <FaGit style={{ color: "#F05032" }} /> },
  {
    name: "Prolog",
    icon: <DiProlog style={{ color: "#A62338" }} />,
    colorInside: "#A62338", // deep red (Protégé owl body)
    colorOutside: "#FF6C00", // orange-red (Protégé owl gradient top)
  },
  // {
  //   name: "Visual Studio Code",
  //   icon: <SiVisualstudiocode style={{ color: "#007ACC" }} />,
  // },
  { name: "Jira", icon: <SiJira style={{ color: "#0052CC" }} /> },
  { name: "IntelliJ", icon: <SiIntellijidea style={{ color: "#000000" }} /> },
  { name: "Eclipse", icon: <SiEclipseide style={{ color: "#2C2255" }} /> },
  { name: "Postman", icon: <SiPostman style={{ color: "#FF6C37" }} /> },
  { name: "Spring MVC", icon: <SiSpring style={{ color: "#6DB33F" }} /> },
  { name: "PostgreSQL", icon: <SiPostgresql style={{ color: "#336791" }} /> },
  { name: "MongoDB", icon: <SiMongodb style={{ color: "#47A248" }} /> },
  {
    name: "Mockito",
    icon: (
      <img
        src={myImage}
        alt="A description"
        loading="lazy"
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "50%", // if you want it circular
        }}
      />
    ),
  },
];

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <h3 className="skillsHeading">Programming Languages</h3>
              <div className="skill-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skillCard">
                    <div className="icon">{skill.icon}</div>
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </div>

              <h3 className="skillsHeading">Tools and Technologies</h3>
              
              
              <div className="skill-grid">
                {technicalTools.map((tool, index) => (
                  <div key={index} className="skillCard">
                    <div className="icon">{tool.icon}</div>
                    <h5>{tool.name}</h5>
                  </div>
                ))}
              </div>


              
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
