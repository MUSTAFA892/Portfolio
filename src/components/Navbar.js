import React, { useState, useRef, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgPlayButton } from "react-icons/cg";
import { ImBlog } from "react-icons/im";




import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import LogoComponent from "./LogoComponent"; // Import the LogoComponent here

function NavBar() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null); // Create a ref for the audio element

  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause audio if playing
      audioRef.current.currentTime = 0; // Reset audio to start
      setIsPlaying(false);
    } else {
      audioRef.current.play(); // Play audio if paused
      setIsPlaying(true);
    }
  };

  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  useEffect(() => {
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <LogoComponent theme={navColour ? "dark" : "light"} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Contact"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/chatbot"
                onClick={() => updateExpanded(false)}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> AskBot
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;