import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import imgPhotographer from "../../Assets/Sebastian_Madrigal_Photographer.webp";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "../About/Techstack";
import Particle from "../ParticleTS";
import Tilt from "react-parallax-tilt";
import FindMeOn from "./FindMeOn";
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
              A little bit about <span className="purple">me</span>.
            </h1>
            <p className="home-about-body">
              I'm a computer scientist with a few other hobbies on the side – software engineering, photography, and coffee (because who doesn't code better with a good cup of coffee?).
              <br />
              <br />I've been developing software for 12 years now and I've got some serious skills under my belt! Specially when it comes to classics like <i>
                <b className="purple"> Java, Python  </b>and <b className="purple">Javascript </b>
              </i>. It's pretty amazing how much you can learn and accomplish in over a decade of coding.

              <br />
              <br />
              Right now, I'm focusing on <i>
                <b className="purple">
                  Engineering Management & Cloud Engineering
                </b>
              </i>, which is pretty exciting stuff. But what really gets me fired up is using my skills and experience to help others grow in the field. That's why I'm so passionate about mentoring and sharing my knowledge with others. &nbsp;



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
                8 bits about <span className="purple"> Sebastian Madrigal</span>
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
                  - I am originally from Colombia 🇨🇴.
                  <br />
                  - I enjoy taking landscape photos, check my<a className="purple" href="https://www.flickr.com/people/sebastianmadrigal/"> portfolio</a>! 📸.
                  <br />
                  - I'm into origami - not quite where I want to be yet, but practice makes perfect, right?.
                </p>
              </Col>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={imgPhotographer} className="img-fluid" alt="Sebastian Henao Madrigal, Engineering Manager, Photographer" />
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
              <FindMeOn />
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
