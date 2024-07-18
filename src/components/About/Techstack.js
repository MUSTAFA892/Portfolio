import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiDart,
  DiMysql,
  DiDjango,
  DiBootstrap,
  DiGithub,
} from "react-icons/di";
import {
  SiFlask,
} from "react-icons/si";
import { SiFirebase, SiPostgresql } from "react-icons/si";

const TECH_STACK_DATA = [
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <DiPython />, name: "Python" },
  { icon: <DiGit />, name: "Git" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <DiMysql />, name: "MySQL" },
  { icon: <DiDjango />, name: "Django" },
  { icon: <SiFlask />, name: "Flask" },
  { icon: <DiBootstrap />, name: "Bootstrap" },
  { icon: <DiGithub />, name: "GitHub" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiDart />, name: "Dart" },
  { icon: <> <DiHtml5 /> <DiCss3 /> </>, name: "HTML & CSS" },
  { icon: <DiJava />, name: "Java" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TECH_STACK_DATA.map((item) => (
        <Col
          key={item.name}
          xs={2} // Adjust column size to 3 for four icons per row
          md={2} // Adjust column size to 3 for medium screens as well
          className="tech-icons"
          style={{ textAlign: "center", padding: "10px", margin: "0" }} // Ensure no margin between columns
        >
          {item.icon}
          <br />
          <span style={{ fontSize: "18px", fontWeight: "bold" }}>
            {item.name}
          </span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
