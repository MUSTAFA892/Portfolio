import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Importing project images and videos
import emotion from "../../Assets/Projects/emotion.png";
import text from "../../Assets/Projects/text-removebg-preview.png";
import win from "../../Assets/Projects/win-removebg-preview.png";
import tic from "../../Assets/Projects/tic-removebg-preview.png";
import Gesture from "../../Assets/Projects/gesture-removebg-preview.png";
import Score from "../../Assets/Projects/score-removebg-preview.png";
import you from "../../Assets/Projects/Untitled_design-removebg-preview.png";
import port from "../../Assets/Projects/Untitled_design__1_-removebg-preview.png";
import ipl from "../../Assets/Projects/Untitled_design__2_-removebg-preview.png";
import todo from "../../Assets/Projects/Untitled_design__3_-removebg-preview.png";
import chat from "../../Assets/Projects/Untitled_design__4_-removebg-preview.png";
import jarvis from "../../Assets/Projects/Screenshot_2024-07-29_135530-removebg-preview.png";
import video1 from "../../Assets/Video/Screen Recording 2024-07-29 133607.mp4";
import video2 from "../../Assets/Video/Screen Recording 2024-07-29 170710.mp4";
import dice from '../../Assets/Projects/Screenshot_2024-07-29_181843-removebg-preview.png';
import music from "../../Assets/Projects/12-removebg-preview.png";
import cricket from "../../Assets/Projects/Untitled_design__5_-removebg-preview.png";
import spectra from "../../Assets/Projects/spectragenix-removebg-preview.png"
import sign from "../../Assets/Projects/Untitled_design__7_-removebg-preview.png"
import encrypt from "../../Assets/Projects/Untitled_design__6_-removebg-preview.png"
import piano_v from "../../Assets/Video/Screen Recording 2024-07-29 170710.mp4"
import piano from "../../Assets/Projects/Untitled_design__8_-removebg-preview.png"
import flappy from "../../Assets/Projects/Untitled_design__10_-removebg-preview.png"
import video3 from "../../Assets/Video/Screen Recording 2024-08-17 184033.mp4"
import license from "../../Assets/Projects/license (2).png"
import video4 from "../../Assets/Video/license.mp4"
import CreateSphere from "../../Assets/Projects/create.png"
import VideoCall from "../../Assets/Projects/2-removebg-preview.png"
import Calculator from "../../Assets/Projects/Cal phone.png"
import Weather from "../../Assets/Projects/weather app (2).png"
import object from "../../Assets/Projects/object.png"
import Gym from "../../Assets/Projects/GYM.png"
import sketch from "../../Assets/Projects/sketch.png"
import repo from "../../Assets/Projects/repobattle.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        
        {/* Beginner Projects */}
        <h2 className="project-category" style={{color: "#c569f0", }}>Beginner</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
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
              imgPath={todo}
              isBlog={false}
              title="Todo App"
              description="A sleek and intuitive task management tool that helps users organize their daily activities. Features include task creation, deadline management, priority setting, and progress tracking. Built with modern web technologies for a seamless user experience."
              ghLink="https://github.com/MUSTAFA892/Todo-app---React"
              demoLink="https://todo-app-react-wh8f.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dice}
              isBlog={false}
              title="Dice Game"
              description="Dice Game is an interactive application that simulates rolling dice for various games and activities. It offers a virtual dice-rolling experience with customizable settings, enhancing gameplay and decision-making with realistic random number generation."
              ghLink="https://github.com/MUSTAFA892/Dice-Game---React"
              demoLink="https://dice-game-react-sigma.vercel.app/"
            />
          </Col>
        </Row>
        
        {/* Intermediate Projects */}
        <h2 className="project-category" style={{color: "#c569f0", }}>Intermediate</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music App"
              description="Discover and enjoy music with SoundWave—your personalized music hub. Search for tracks, explore top results, genre hits, and recently played songs, all enhanced with vibrant visuals and an intuitive interface for an immersive listening experience."
              ghLink="https://github.com/MUSTAFA892/Music-APP-React"
              demoLink="https://music-app-react-gold.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat App"
              description="React chat app powered by Firebase.Real-time messaging with friends. Send text, images, and more. Easy-to-use interface for seamless communication."
              ghLink="https://github.com/MUSTAFA892/CHAT-APP-REACT"
              demoLink="https://chat-app-react-beta.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cricket}
              isBlog={false}
              title="Cricket Run Calculator"
              description="A tool for calculating cricket scores and runs."
              ghLink="https://github.com/MUSTAFA892/Cricket-Run-Calculator"
              demoLink="https://cricket-run-calculator.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappy}
              isBlog={false}
              title="Flappy Bird Game"
              description="A game which is developed using Pygame"
              ghLink="https://github.com/MUSTAFA892/Flappy-Bird-Pygame"
              demoLink={video3}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={encrypt}
              isBlog={false}
              title="Encryption and decryption"
              description="This user-friendly application allows you to securely encrypt and decrypt text using popular cryptographic algorithms. Whether you need to protect sensitive information or securely share messages."
              ghLink="https://github.com/MUSTAFA892/Encrypt-Decrypt-Binary-conveter-Streamlit"
              demoLink="https://encrypt-decrypt-binary-conveter-app-w7cyymdpi7s8v24csjqvp3.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={license}
              isBlog={false}
              title="License Plate Detection System"
              description="The License Plate Detection System is an advanced computer vision application designed to automatically detect and read vehicle license plates from images or video feeds. Utilizing state-of-the-art machine learning and image processing techniques, the system provides accurate and efficient recognition of license plates, enabling various applications in security, parking management, and vehicle identification."
              ghLink="https://github.com/MUSTAFA892/License-Plate-Detector"
              demoLink={video4}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Signature App"
              description="A Signature app to make digital signature and download the sign in PNG format."
              ghLink="https://github.com/MUSTAFA892/Signature-App-React"
              demoLink="https://todo-app-react-ten-delta.vercel.app/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={you}
              isBlog={false}
              title="YouTube Video Summarizer"
              description="Automate video summarization with our YouTube video summarizer! Get concise, 1-minute summaries of lengthy videos, saving you time and effort. Perfect for busy learners, researchers, and content creators."
              ghLink="https://github.com/MUSTAFA892/Youtube-Video-Summarizer"
              demoLink="https://videosummarizeer.streamlit.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CreateSphere}
              isBlog={false}
              title="Create Sphere"
              description="CreateSphere is an innovative platform designed to revolutionize how you generate content. With CreateSphere, you can effortlessly produce diverse and dynamic outputs by simply inputting text. Our cutting-edge technology transforms your written words into a variety of creative and functional outputs, from detailed articles and engaging stories to unique digital art and data-driven insights."
              ghLink="https://github.com/MUSTAFA892/Create-Sphere---React"
              demoLink="https://create-sphere-react.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VideoCall}
              isBlog={false}
              description = "FaceLink is your ultimate video calling solution, designed for seamless communication. Whether you're catching up with friends, collaborating with colleagues, or having an important one-on-one conversation, FaceLink provides crystal-clear video, reliable connectivity, and a user-friendly interface that makes staying connected easier than ever."
              title="Face Link"
              ghLink="https://github.com/MUSTAFA892/Video-Call-App-React"
              demoLink="https://video-call-app-react-ckzs.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={object}
              isBlog={false}
              description = "An Object Detection System using TensorFlow.js and React enables real-time identification and classification of objects within video frames captured through a webcam or camera feed. By integrating TensorFlow.js, a powerful JavaScript library for machine learning, we can run pre-trained models directly in the browser to detect objects in real-time."
              title="Object Detection system"
              ghLink="https://github.com/MUSTAFA892/Object-Detection-System-React-"
              demoLink="https://object-detection-system-react.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              description = "This Basic Calculator App is a simple and user-friendly tool designed to perform everyday arithmetic calculations. Built using React Native, the app is lightweight, fast, and works seamlessly on Android devices."
              title="Calculator Android App"
              ghLink="https://github.com/MUSTAFA892/Calculator-App-React-Native.git"
              demoLink="https://drive.google.com/file/d/18iLi2-FqJBYHCeCjlpxaqM7IPpfKuYdJ/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sketch}
              isBlog={false}
              description = "he Sketch Calculator is an interactive and user-friendly tool integrated into the React app, designed to make basic calculations while providing a visual sketching interface. It allows users to perform standard arithmetic operations such as addition, subtraction, multiplication, and division, while also enabling them to sketch diagrams or draw simple visual representations that can assist in problem-solving or displaying calculations visually."
              title="Sketch Calclator"
              ghLink="https://github.com/MUSTAFA892/Sketch_Calculator_React-Vite"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={repo}
              isBlog={false}
              description = "In this project, two AI-powered agents go head-to-head to analyze and critique each other's GitHub repositories. Using advanced natural language processing (NLP) and machine learning techniques, each AI reviews the other’s codebase, providing detailed feedback, funny commentary, and even roasting the code quality, documentation, and overall structure."
              title="Github repo battle"
              ghLink="https://github.com/MUSTAFA892/Github-repo-battle"
              demoLink="https://github-repo-battle-i6kziley5-mustafa892s-projects.vercel.app/"
            />
          </Col>
        </Row>
        
        {/* Advanced Projects */}
        <h2 className="project-category" style={{color: "#c569f0", }}>Advanced</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Text-Tweaker"
              description="Enhance, refine, and perfect your written content effortlessly. Edit text with precision, tweak sentences, and improve readability with intuitive tools. Ideal for writers, students, and professionals seeking polished and impactful communication."
              ghLink="https://github.com/MUSTAFA892/Text-Tweaker/tree/master"
              demoLink="https://mustafa892.github.io/Text-Tweaker/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piano}
              isBlog={false}
              title="Piano - Pygame"
              description="an interactive musical experience built using Pygame! This game offers a fun and engaging way to play and explore piano music directly from your computer. Whether you’re a seasoned pianist or a curious beginner, this game is designed to provide an enjoyable and educational experience with a virtual piano interface."
              ghLink="https://github.com/MUSTAFA892/Piano-Pygame"
              demoLink={piano_v}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gesture}
              isBlog={false}
              title="Gesture Control"
              description="Seamlessly control your cursor with left-hand gestures and effortlessly type using the keyboard with right-hand gestures. Enhance productivity and accessibility with intuitive hand gestures, perfect for streamlined navigation and interaction."
              ghLink="https://github.com/MUSTAFA892/Gesture-Control"
              demoLink={video2}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Gym}
              isBlog={false}
              title="Gym App"
              description="GymFlex is an innovative fitness app designed to revolutionize your workout and nutrition routine. Powered by advanced AI, GymFlex offers personalized workout plans, custom nutrition guidance, and powerful tracking features, all tailored to help you achieve your fitness goals. Whether you’re aiming to build muscle, lose weight, or simply live a healthier lifestyle, GymFlex adapts to your needs, helping you stay on track and reach new levels of fitness."
              ghLink="https://github.com/MUSTAFA892/GYM_APPLICATION_REACT"
              demoLink= ""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather Wave"
              description="Weather Wave is a dynamic weather application designed to provide users with real-time, accurate, and visually appealing weather updates. It offers essential weather details like current temperature, humidity, wind speed, and atmospheric pressure, along with more advanced insights such as hourly and weekly forecasts, radar maps, and severe weather alerts."
              ghLink="https://github.com/MUSTAFA892/Weather-App-ReactNative-Expo/tree/main"
              demoLink="https://expo.dev/accounts/mustafa1234567890/projects/WeatherWave/builds/e2339422-5b6a-48b2-ab6c-094fb578f233"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={win}
              isBlog={false}
              title="IPL Winner Predictor"
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
              ghLink="https://github.com/MUSTAFA892/IPL-Score-prediction-System"
              demoLink="https://mustafa52.pythonanywhere.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/MUSTAFA892/Face-and-emotion-Detector"
              // demoLink="To be added"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jarvis}
              isBlog={false}
              title="JARVIS"
              description="Jarvis is an advanced personal assistant application designed to facilitate task management and improve productivity. Featuring voice recognition, natural language processing, and intuitive text-to-speech capabilities, Jarvis offers a hands-free and intelligent solution for managing daily activities and information retrieval."
              ghLink="https://github.com/MUSTAFA892/JARVIS-FLASK"
              demoLink={video1}
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
              ghLink="https://github.com/MUSTAFA892/IPL-APP"
              demoLink="https://ipl-eq0rjr20f-mustafa892s-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spectra}
              isBlog={false}
              title="Spectragenix'24"
              description="SpectraGenix'24 is an interdisciplinary symposium that brings together thought leaders, innovators, students, and professionals to explore cutting-edge developments across a wide range of fields. From emerging technologies and scientific research to creative arts and social sciences, the symposium serves as a platform for intellectual exchange, collaboration, and inspiration."
              ghLink="https://github.com/MUSTAFA892/Symposium-Flask"
              demoLink="https://symposium-flask-ub9h.onrender.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
