import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import emotion from "../../Assets/Projects/emotion.png";
import text from "../../Assets/Projects/text-removebg-preview.png"
import win from "../../Assets/Projects/win-removebg-preview.png"
import tic from "../../Assets/Projects/tic-removebg-preview.png"
import Gesture from "../../Assets/Projects/gesture-removebg-preview.png"
import Score from "../../Assets/Projects/score-removebg-preview.png"
import you from "../../Assets/Projects/Untitled_design-removebg-preview.png"
import port from "../../Assets/Projects/Untitled_design__1_-removebg-preview.png"
import ipl from "../../Assets/Projects/Untitled_design__2_-removebg-preview.png"
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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text-Tweaker"
              description=" Enhance, refine, and perfect your written content effortlessly. Edit text with precision, tweak sentences, and improve readability with intuitive tools. Ideal for writers, students, and professionals seeking polished and impactful communication."
              ghLink="https://github.com/MUSTAFA892/Text-Tweaker/tree/master"
              demoLink="https://mustafa892.github.io/Text-Tweaker/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gesture}
              isBlog={false}
              title="Gesture Control"
              description="Seamlessly control your cursor with left-hand gestures and effortlessly type using the keyboard with right-hand gestures. Enhance productivity and accessibility with intuitive hand gestures, perfect for streamlined navigation and interaction."
              ghLink="https://github.com/MUSTAFA892/Gesture-Control"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={win}
              isBlog={false}
              title=" IPL Winner predictor"
              description="Harness the power of Streamlit to forecast IPL match outcomes with precision. Analyze historical data, predict potential winners, and stay ahead in cricket's most exciting league using interactive and intuitive prediction tools."
              ghLink="https://github.com/MUSTAFA892/Winner-System-Streamlit"
              demoLink="https://iplwinner.streamlit.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Score}
              isBlog={false}
              title="IPL Score Predictor"
              description="Utilize advanced analytics and historical data to forecast scores in IPL matches. Predict outcomes with precision using interactive tools, enhancing your cricket viewing experience with accurate score projections."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tic}
              isBlog={false}
              title="Tic Tac Toe"
              description="Classic strategic game where players take turns marking spaces in a 3x3 grid, aiming to achieve a row, column, or diagonal of their symbol. Enjoy timeless fun and test your tactics in this engaging challenge."
              ghLink="https://github.com/MUSTAFA892/Tic-Tac-Toe"
              demoLink="https://tic-tac-toe-omega-ashen.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/MUSTAFA892/Face-and-emotion-Detector"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={you}
              isBlog={false}
              title="Youtube Video Summarizer"
              description="Automate video summarization with our YouTube video summarizer! Get concise, 1-minute summaries of lengthy videos, saving you time and effort. Perfect for busy learners, researchers, and content creators."
              ghLink="https://github.com/MUSTAFA892/Youtube-Video-Summarizer"
              demoLink="https://videosummarizeer.streamlit.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="Portfolio"
              description="Explore my digital portfolio, showcasing a curated selection of projects that demonstrate my skills and expertise in [specific areas of expertise]. From concept to delivery, see how I bring ideas to life and drive results."
              ghLink="https://github.com/MUSTAFA892/Portfolio"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ipl}
              isBlog={false}
              title="IPL APP"
              description="Get live IPL scores, team & player info, winner predictions, and score forecasts. Stay updated with the latest cricket action!"
              ghLink="https://github.com/MUSTAFA892/Portfolio"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
