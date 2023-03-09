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
              alt="Sebastian Henao Madrigal, Leancore, startup, Fintech"
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
              alt="Sebastian Henao Madrigal, BlueHubble"
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
              imgPath={smartmedicine}
              isBlog={false}
              title="Gyffu: A child-friendly search engine in Latin America."
              alt="Sebastian Henao Madrigal, Gyffu, Startup"
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
              alt="Sebastian Henao Madrigal, Gyffu, Engineering Manager, Computer Scientist"
              site="prnewswire.com"
            />
          </Col>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={bluspot}
              link="https://telemedellin.tv/bluspot-aplicacion-parqueaderos-medellin/167585/"
              title="Bluspot: An alternative to the parking problem in Colombia."
              alt="Sebastian Henao Madrigal, Bluspot"
              site="telemedellin.tv"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
