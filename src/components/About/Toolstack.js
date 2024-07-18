import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiAnaconda,
  SiDiscord,
  SiStreamlit,
  SiNetlify,
  SiGooglecolab,
  SiKaggle,
  SiUbuntu,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>VS Code</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDiscord/>
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Discord</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAnaconda />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Anaconda</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiStreamlit />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Streamlit</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Googlecolab</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Netlify</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Kaggle</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Ubuntu</span>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <br />
        <span style={{ fontSize: "16px", fontWeight: "bold" }}>Vercel</span>
      </Col>
    </Row>
  );
}

export default Toolstack;
