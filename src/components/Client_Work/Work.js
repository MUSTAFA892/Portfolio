import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import WorkCard from "./WorkCard";
import Ecommerce_1 from "../../Assets/Projects/Ecommerce_1.png";
import Ecommerce_2 from "../../Assets/Projects/Ecommerce_2.png"
import Particle from "../Particle";

function Work() {
  // State to toggle visibility of additional projects
  const [showMore, setShowMore] = useState(false);

  // Combined project data
  const projects = [
    {
      imgPath: Ecommerce_1,
      title: "Bharat Hydraulics – eCommerce Website (Version 1)",
      description : "The Version 1 release of the Bharat Hydraulics website is a catalog-style platform designed to establish a strong digital presence and allow customers to browse products and submit inquiries easily. This version focuses on showcasing the product range with detailed specifications while integrating a simple quotation request system.",
      demoLink: "https://ecommerce-client-592p.vercel.app/",
    },
    {
        imgPath: Ecommerce_2,
        title: "Bharat Hydraulics – eCommerce Website (Version 2)",
        description : "Version 2 enhances the catalog-based platform introduced in Version 1 by adding more advanced features, a refined user experience, and improved management tools. It continues to operate primarily as a quotation-based system while offering a more professional and streamlined interface for both users and admins.",
        demoLink: "https://ecommerce-client-one-opal.vercel.app/",
      },
    
    
  ];

  // Render project cards
  const renderProjects = (projects, showMore) => {
    const displayProjects = showMore ? projects : projects.slice(0, 3);
    return displayProjects.map((project, index) => (
      <Col md={4} className={`project-card ${showMore && index >= 3 ? 'fade-in' : ''}`} key={index}>
        <WorkCard
          imgPath={project.imgPath}
          isBlog={false}
          title={project.title}
          description={project.description}
          ghLink={project.ghLink}
          demoLink={project.demoLink}
        />
      </Col>
    ));
  };

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
      <h1 className="project-heading">
        Recent <strong className="purple">Client Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
        These projects were built <strong className="purple">collaboratively</strong> by our <strong className="purple">team</strong>, combining our skills in <strong className="purple">design</strong>, <strong className="purple">development</strong>, and <strong className="purple">problem-solving</strong> to deliver <strong className="purple">tailored digital solutions</strong> that meet our clients' <strong className="purple">unique business needs</strong>.
        </p>



        {/* Client Work Projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {renderProjects(projects, showMore)}
        </Row>
        {projects.length > 3 && (
          <div className="show-more-container">
            <button
              className="show-more-btn"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default Work;