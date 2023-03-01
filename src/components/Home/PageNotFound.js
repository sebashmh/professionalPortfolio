import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/Sebastian_Madrigal_Photographer.webp";
import Particle from "../ParticleTS";
import FindMeOn from "./FindMeOn";
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
                                Ups!
                            </h1>

                            <h1 className="heading-name">
                                The page you are looking for has been lost in
                                <strong className="main-name"> Space</strong>🔭
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>

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
            <Container fluid className="home-about-section" >
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <FindMeOn />
                </Row>
            </Container>
        </section>
    );
}

export default Home;
