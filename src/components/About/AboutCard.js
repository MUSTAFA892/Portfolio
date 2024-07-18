import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am <span className="purple">Mustafa </span>
          from <span className="purple"> Coimbatore, India.</span>
          <br />
          I am currently pursuing my Bachelor's degree in <span className="purple">Artificial Intelligence & Data Science (AI&DS)</span> at <span className="purple">KGISL Institute of Technology.</span>
          <br />
          I am currently in my second year.
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep Trying until You succeed!"{" "}
          </p>
          <footer className="blockquote-footer">Mustafa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
