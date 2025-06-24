import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/k-logo-final-preview.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-96.png";
import navIcon3 from "../assets/img/icons8-mail-50.png";
import colorSharp2 from "../assets/img/color-sharp2.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
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
            <p>Copyright 2025 Kruthi Hosamane. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </footer>
  );
};
