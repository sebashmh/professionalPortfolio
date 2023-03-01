import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function FindMeOn(prop) {
    return (
        <div>
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
        </div>
    );
}

export default FindMeOn;
