import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "../About/Techstack";
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A little bit <span className="purple"> About </span> me.
            </h1>
            <p className="home-about-body">
              I love tech, coding is one of my passions. I've been coding
              for 10 years. I also love photography and Origami.
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
                  Data Analysis and Software Architecture .
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with
              <i>
                <b className="purple"> Modern Javascript Frameworks </b>
              </i>
              like
              <i>
                <b className="purple"> Node.js and React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Container fluid className="home-icons">
          <Particle />
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <Row>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
              < Techstack iconName="devicon-javascript-plain" />
              <Techstack iconName="devicon-python-plain-wordmark " />
              <Techstack iconName="devicon-swift-plain" />
              <Techstack iconName="cib-tensorflow" />
              < Techstack iconName="devicon-java-plain " />
              <Techstack iconName="devicon-nodejs-plain-wordmark " />
              <Techstack iconName="devicon-express-original-wordmark" />
              <Techstack iconName="devicon-react-original-wordmark" />
              <Techstack iconName="devicon-mongodb-plain-wordmark" />
              <Techstack iconName="devicon-git-plain-wordmark" />
              <Techstack iconName="devicon-bootstrap-plain-wordmark" />
            </Row>
          </Row>
        </Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sebashmh"
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
                  href="https://www.linkedin.com/in/sebastianhenaomadrigal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/madrinator/"
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
    </Container>
  );
}
export default Home2;
