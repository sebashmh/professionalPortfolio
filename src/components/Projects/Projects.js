import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../ParticleTS";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import smartmedicine from "../../Assets/Projects/Colombian Farmer SmartMedicine.webp";
import bluspot from "../../Assets/Projects/bluspot.webp";
import blueHubble from "../../Assets/Projects/BlueHubble_Sebastian_Henao_Madrigal.webp";
import leancore from "../../Assets/Projects/leancore.webp";
import gyffu from "../../Assets/Projects/Sebastian Henao Madrigal Gyffu.webp";
import plant from "../../Assets/Projects/bluspot.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      
      <Container>
       <Particle/>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={leancore}
              isBlog={false}
              title = "Leancore a new way to create financial inclusion in Latam."
              description= "LeanCore is the ultimate modular solution for companies seeking access 
              to a robust, non-traditional banking core. Lean Core provides innovative financial 
              services that are fully compatible with fintech players, consumer ecosystems, and users 
              in need of credit solutions. Our platform is built with state-of-the-art HTTPS security schemes, 
              JWT authentications, and responses in JSON-type format, providing endless connections to
              financial environments with complete peace of mind. We pride ourselves on delivering advanced 
              services through simple requests, ensuring ease of use and accessibility for all users"
              link = "https://leancore.co"/>
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={blueHubble}
              isBlog={false}
              title = "BlueHubble a cloud monitoring platform for network devices."
              description = "BlueHubble is the ultimate tech platform for network management, 
              bringing together thousands of network elements regardless of layer or manufacturer. 
              Our platform provides an easy-to-use dashboard that lets you monitor and manage all of 
              your network elements with ease. With BlueHubble, you can say goodbye to complicated, 
              time-consuming network management and hello to efficient, streamlined operations. 
              Our innovative platform is designed to deliver real results for your business, 
              helping you stay on top of network performance and security. "
              link = "https://bluehubble.com/aiops"/>
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bluspot}
              isBlog={false}
              title = "Bluspot: An alternative to the parking problem in Colombia."
              description = "Bluspot is an app that allows drivers to connect with owners of empty parking spaces 
              and book them in advance. Built using ReactNative, the app makes it easy for users to find parking 
              spots in congested areas of Colombia. With Bluspot, you can reserve your parking space up to 
              15 minutes before you arrive, making it a convenient solution for those who need to find parking 
              quickly. The app also automatically charges the fare to your credit card, eliminating the need 
              for cash transactions. Bluspot allows users to leave reviews and comments about 
              their experience, ensuring transparency and accountability."
              link = "https://telemedellin.tv/bluspot-aplicacion-parqueaderos-medellin/167585/"/>
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={smartmedicine}
              isBlog={false}
              title="Gyffu: A child-friendly search engine in Latin America."
              description = "Co-founder of Gyffu a platform that protected children from harmful content, including pornography, violence, 
              and suicide-related content, we used utilizing Python, ElasticSearch, MongoDB, and Hadoop to build the 
              platform. Through our efforts, we successfully reached 300,000 users in Colombia and Peru, 
              the majority of whom were children and teenagers using Gyffu for their homework. We ultimately sold to a 
              private investor who recognized the potential of our search algorithms and machine learning 
              models. This platform is not currently online since it was sold to another company."
              link="https://www.prnewswire.com/news-releases/colombia-based-privacy-focused-search-engine-gyffu-celebrates-crossing-milestone-as-one-of-the-worlds-1-million-most-visited-websites-300166727.html"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          Sebastian's<strong className="purple"> Startups </strong> on the News
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of the articles about my Startups and Projects </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={gyffu}
              link="https://www.prnewswire.com/news-releases/colombia-based-privacy-focused-search-engine-gyffu-celebrates-crossing-milestone-as-one-of-the-worlds-1-million-most-visited-websites-300166727.html"
              title="Gyffu continues to grow beyond expectations"
              site="prnewswire.com"
            />
          </Col>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={plant}
              link="https://medium.com/"
              title="The Cost of your privacy"
              site="medium.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
