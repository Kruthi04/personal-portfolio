import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/k-logo-final-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-96.png";
import navIcon3 from "../assets/img/icons8-mail-50.png";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const handleNavClick = (section) => {
    setActiveLink(section);

    if (location.pathname !== "/") {
      window.location.href = `/#${section}`;
    } else {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState(null, "", `#${section}`);
      }
    }
  };
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // const onUpdateActiveLink = (value) => {
  //   setActiveLink(value);
  // };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "150px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              onClick={() => handleNavClick("home")}
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
            >
              Home
            </Nav.Link>

            <Nav.Link
              onClick={() => handleNavClick("about")}
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
            >
              About
            </Nav.Link>

            <Nav.Link
              onClick={() => handleNavClick("projects")}
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
            >
              Profile
            </Nav.Link>

            <Nav.Link
              onClick={() => handleNavClick("skills")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Skills
            </Nav.Link>
            <Nav.Link
              onClick={() => handleNavClick("connect")}
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lakshmi-kruthi/">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/Kruthi04">
                <img src={navIcon2} alt="" />
              </a>
              <a href="mailto:lhosaman@gmail.com">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            {/* <HashLink to="#connect">
              <button className="vvd">
                <span>Let’s Connect</span>
              </button>
            </HashLink> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
