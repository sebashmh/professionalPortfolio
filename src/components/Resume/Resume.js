
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../ParticleTS";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Sebastian_Henao_Madrigal_Engineering_Manager_S.png";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Technical Project Manager [Bluesmile]"
              date="Jan 2020 - Present"
              content={[
                "I Supervise other software engineers, and design software solutions for clients. I am the lead developer and scrum master for BlueHubble, a platform that gathers and centralizes data from thousands of networking devices. This data is compiled to create analytics and reports in order to predict and prevent failures. These KPIs are shown on a dashboard built using ReactJs, NodeJs, and multiple Python scripts. This platform is hosted on the AWS Cloud.",
                "Responsible for planning and overseeing 4 projects per semester. Achieving 73% of the planned deadlines.",
              ]}
            />
            <Resumecontent
              title="Co-founder & Board member [Leancore]"
              date="Jan 2020 - Present"
              content={[
                "I attend weekly engineering meetings and give feedback on the company’s business model. I provide guidance to the engineering department in cloud services, BlockChain solutions, and BackEnd technologies.."]}
            />
            <Resumecontent
              title="Co-founder & CTO [Leancore]"
              date="Feb 2016 - Dec 2019"
              content={[
                "Lead engineer and senior backend developer. Within this position, I worked with different technologies, including NodeJs, MongoDB, Lambda services, and AWS Servers.These technologies were used to create REST services for the company."]}
            />
            <Resumecontent
              title="Co-founder & CTO [Gyffu SAS]"
              date="July 2013 - Dec 2017"
              content={[
                "Co-founder of Gyffu SAS, the first safe search platform created in Latin America. Gyffu protected children from pornographic, violent, and suicidal content.I worked as the lead engineer and BackEnd developer using Python, ElasticSearch, MongoDb, and Hadoop.Gyffu reached 1, 000, 000 users in Colombia and Perú."]}
            />
            <Resumecontent
              title="Software Engineer [Heinsohn Business Technology]"
              date="March 2011 - April 2013"
              content={[
                "Design and development of use cases in Java JEE, Oracle 12c, and PL/SQL for the pension platform Protección. Additionally, I created modular core components for the platform cache, temporary data management, and constants. These platform components and use cases were hosted on WebSphere Application Server V7.0.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="University of Florida [Gainesville, FL] "
              date="Jan 2019"
              content={[`English Language Institute, English as a Second Language.`]}
            />
            <Resumecontent
              title="University of Quindio [Armenia, Colombia]"
              date="June 2016"
              content={["Bachelor of Science: Computer Science & Engineering"]}
            />
            <h3 className="resume-title">Certifications</h3>
            <Resumecontent
              title="Red Hat, Red Hat Certified Systems Administrator (RHCSA)"
              date=
              "Sept 2021"
              content={[""]}

            />
            <Resumecontent
              title="MongoDB University, MongoDB & NodeJS Developer"
              date=
              "May 2017"
              content={[""]}
            />
            <Resumecontent
              title="Camp Negotiation Institute, IT Certified Negotiation Expert"
              date=
              "Sept 2016"
              content={[""]}
            />
            <Resumecontent
              title="Universidad del Quindío, Big Data Certification"
              date=
              "June 2016"
              content={[""]}
            />
            <h3 className="resume-title">Honors</h3>
            <Resumecontent
              title="University of Florida, Jayne C. Harder Memorial Scholarship"
              date=
              "May 2019"
              content={["One of two students out of 250 to receive a full-tuition scholarship "]}
            />
            <Resumecontent
              title="Junior Chamber International, Ten Outstanding Young People Award"
              date=
              "Aug 2017"
              content={["Award for Best Technological and Scientific Development in Colombia"]}
            />
            <Resumecontent
              title="Minister of Technologies (MinTic), Colombia online Awards"
              date=
              "Dec 2015"
              content={["Best Mobile App in Colombia, awarded to Gyffu"]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
