import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinesh Yagnik </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am a pursuing BCA in Information Technology in IMS Noida.
            Also I have Completed Full Stack Java Development from Ducat .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogging
            </li>
            <li className="about-activity">
              <ImPointRight /> Working out at a gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dinesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
