import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/Sebastian_Henao_Madrigal_Engineering_Manager_S.png";
import Particle from "../ParticleTS";
import Home2 from "./Home2";
import Type from "./Type";
import Tilt from "react-parallax-tilt";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header" style={{ textAlign: "left" }}>
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Sebastian Henao Madrigal</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={homeLogo} className="img-fluid" alt="avatar" style={{ textAlign: "center" }} />
              </Tilt>
            </Col>



          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
