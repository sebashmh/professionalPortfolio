import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>


          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              Atlanta based < span className="purple" > Computer Scientist. </span>
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              A Coffee connoisseur (not a snob).
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I used to compete in mountain biking races, but now it's just a hobby.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I Co-founded 2 Startups .
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I passionate about travel and landscape photography.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I am originally from Colombia. Yeah from Colombia not Columbia.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I play electric bass guitar.
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i>
              I enjoy folding paper, I have been practicing Origami for 10 years. I do not enjoy folding clothes though.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "If they say you are crazy, you are on the right track. "{" "}
          </p>
          <footer className="blockquote-footer">Sebastian Madrigal </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
