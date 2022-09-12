import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import gyffu from "../../Assets/Projects/Sebastian Henao Madrigal Gyffu.png";
import smartmedicine from "../../Assets/Projects/Colombian Farmer SmartMedicine.png";
import nival from "../../Assets/Projects/nival.png";
import bluspot from "../../Assets/Projects/bluspot.png";
import leancore from "../../Assets/Projects/leancore.png";
import algo from "../../Assets/Projects/nival.png";
import plant from "../../Assets/Projects/bluspot.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
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
              description= "LeanCore is a modular solution tool aimed at companies 
              seeking access to a robust non-traditional banking core, with solutions 
              based on the inclusion of financial services compatible with fintech players, 
              consumer ecosystems and users in need of credit solutions. Leancore provides advance services through simple requests, 
              with HTTPS security schemes, JWT authentications and responses in JSON-type format that 
              will provide endless connections to financial environments."
              link = "https://leancore.co"/>
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={bluspot}
              isBlog={false}
              title = "Bluspot an alternative to the parking problem in Colombia."
              description = "Bluespot is based on the Airbnb concept of timesharing and allows 
              connections between owners of empty parking spaces and those who need them. 
              The app is developed using ReactNative and enables its users to reserve their spaces up 
              to 15 minutes before they arrive, and automatically charges the fare to their credit 
              cards. Like AirBNB, Bluespot users can review their hosts and leave comments. The app 
              is thought to be a breakthrough in utilization of public spaces and could enable some 
              of the narrow one way streets of Colombia to be more easily accessed."
              link = "https://colombiafocus.com/bluspot-proposes-an-alternative-to-the-parking-problem-in-medellin"/>
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={nival}
              isBlog={false}
              title = "Analyzing Search Behaviors to Prevent Suicide."
              description = "I developed a model applying NLP,  LSTM, and Random forest  to analyze 
              and predict suicidal behavior in children and teenagers in Colombia. This model examined 
              the search queries made by children and sent alarms to their parents or the proper institution. 
              The tool was used in 12 high schools and four colleges in Colombia. Through the use of this tool 
              and other tools created by Gyffu SAS we were able to protect more than 300,000 children in Colombia."
              link="https://github.com/sebashmh/Plant_AI"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={smartmedicine}
              isBlog={false}
              title = "Sending vaccine reminders to rural mothers."
              description = "In 2013, the maternal and under-five mortality rates in the rural parts 
              of Quindío, Colombia were high (around 15%). Many families who live in rural areas miss 
              important public health messaging because they do not have access to internet or TV. 
              In order to help to solve this issue, I created a platform in collaboration with Dr. Jeadran 
              to send  rural women notifications for their prenatal appointments . This platform also informed 
              doctors and social workers when patients missed several appointments and were potentially at risk."
              link="https://github.com/sebashmh/Face_And_Emotion_Detection"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={gyffu}
              isBlog={false}
              title="The first child-friendly safe engine in Latin America."
              description = "I Co-founded  Gyffu, the first safe search platform created in Latin America. 
              Gyffu protected children from pornographic, violent, and suicidal content.I worked as the engineering and 
              BackEnd developer leader using Python, ElasticSearch, MongoDB, and Hadoop.We reached 1, 000, 000 users in 
              Colombia and Perú.Most of these users were children and teenagers that used Gyffu for homework.
              The company was successfully sold to a private investor that implemented our search algorithms and ML models to 
              their business."
              link="https://github.com/sebashmh/MedHub_360"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blog </strong> Posts
        </h1>
        <p style={{ color: "white" }}>Do give a read to some of my blogs</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={6} className="blog-card">
            <BlogCard
              imgPath={algo}
              link=""
              title="Cracking Interview"
              site="gitbook.com"
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
