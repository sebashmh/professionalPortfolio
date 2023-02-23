import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Aboutcard from "../About/AboutCard";
import laptopImg from "../../Assets/about.png";
import bitImg from "../../Assets/8bit.png"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE BIT <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              I love tech, coding is one of my passions, and coffee as well. I've been coding
              for 10 years💻
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My current focus is on &nbsp;
              <i>
                <b className="purple">
                  Engineering Management & Cloud Engineering .
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with Modern Javascript Frameworks like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>

        </Row>
        
      </Container>
      <Container fluid className="about-section">
                <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          < Techstack iconName = "devicon-javascript-plain" / >
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="devicon-swift-plain" />
          <Techstack iconName="cib-tensorflow" />
          < Techstack iconName = "devicon-java-plain " / >
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-linux-plain" />
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="cib-anaconda" />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="cib-zeit" />
          <Techstack iconName="cib-heroku" />
        </Row>
      </Container>
      <Container >
      
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              8 Bits about me. < img src = {
                bitImg
              }
              alt = "bits"
              className = "img-fluid"
              style={{
                height:"48px",
                width:"48px"

              }} / >
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href = "https://github.com/sebashmh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/madrinator"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href = "linkedin.com/in/sebastianhenaomadrigal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.vero.co/sebasmadrigal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Particle />
    </Container>
    </Container>
  );
}
export default Home2;
