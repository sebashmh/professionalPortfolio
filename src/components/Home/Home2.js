import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import imgPhotographer from "../../Assets/Sebastian_Madrigal_Photographer.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "../About/Techstack";
import Particle from "../ParticleTS";
import Tilt from "react-parallax-tilt";
import Gallery from "../Gallery";


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
              A little bit <span className="purple"> About </span> me.
            </h1>
            <p className="home-about-body">
              -I'm really passionate about tech, software engineering, photography, and coffee!
              <br />
              <br />-It's been 12 years since I started coding and I'm fluent in classics like
              <i>
                <b className="purple"> Java, Python and Javascript. </b>
              </i>
              <br />
              <br />
              -Right now, I'm focusing on &nbsp;
              <i>
                <b className="purple">
                  Engineering Management & Cloud Engineering .
                </b>
              </i>
              <br />
              <br />
              -Whenever I can, I use my development expertise with modern JavaScript frameworks like
              <i>
                <b className="purple"> Node.js and React.js. </b>
              </i> I'm also passionate about using my skills to help others learn and progress in
              the field.

            </p>
          </Col>

        </Row>

      </Container>
      <Container fluid className="about-section">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          < Techstack iconName="devicon-javascript-plain" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="cib-tensorflow" />
          < Techstack iconName="devicon-java-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>

      </Container>
      <Container >

        <Container>
          <Row>

            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                8 BITS <span className="purple"> ABOUT </span> ME
              </h1>
              <Col>
                <p className="home-about-body">
                  - I am a coffee connoisseur, or, as my friends say, a total coffee nerd! ☕.
                  <br />-  Atlanta based < span className="purple" > Computer Scientist. 💻</span><br />
                  - I used to race mountain bikes, but now it's just something I do for fun! 🚵🏻‍♂️.
                  <br />
                  - Co-founder of 2 Startups 📱.
                  <br />
                  - I can speak fluently English and Spanish 📢.
                  <br />
                  - I am originally from Colombia, not Columbia 🇨🇴.
                  <br />
                  - I enjoy taking landscape photos, check my<a className="purple" href="google.com"> portfolio</a>! 📸.
                  <br />
                  - I'm into origami - not quite where I want to be yet, but practice makes perfect, right?.
                </p>
              </Col>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={imgPhotographer} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>

          </Row>


        </Container>
        <Container fluid className="about-section">
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Techstack iconName="devicon-linux-plain" />
            <Techstack iconName="cib-visual-studio-code" />
            <Techstack iconName="cib-anaconda" alt="Anaconda" hint="Anaconda" />
            <Techstack iconName="cib-postman" />
            <Techstack iconName="cib-zeit" />
            <Techstack iconName="cib-heroku" />
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
                    href="https://linkedin.com/in/sebastianhenaomadrigal/"
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
          <Gallery />
        </Container>

      </Container>
      <Particle />
    </Container>

  );
}
export default Home2;
