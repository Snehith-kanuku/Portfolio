import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaReact, FaJava } from "react-icons/fa"; // Importing icons
import "./Projects.css"; // Ensure you have this CSS file

const projects = [
  {
    title: "E-Commerce Web App",
    description: "Built using React.js, Redux, and Firebase for authentication.",
    icon: <FaReact />,
    link: "https://github.com/Snehith-kanuku/Ecommerce", // Replace with actual GitHub repo
  },
  {
    title: "Employee Management system with Spring Boot",
    description: "Developed RESTful APIs with Java & Spring Boot for microservices.",
    icon: <FaJava />,
    link: "https://github.com/Snehith-kanuku/Employee-Management-System-/tree/main/employeedata", // Replace with actual GitHub repo
  },
  {
    title: "Basic oAuthentication system",
    description: "Implemented OAuth2.0 for secure user authentication.",
    icon: <FaJava />,
    link: "https://github.com/Snehith-kanuku/BasicAuth/tree/main/autho", // Replace with actual GitHub repo
  },
  {
    title: "School portfolio",
    description: "Created a portfolio website using React.js to showcase projects.",
    icon: <FaReact />,
    link: "https://github.com/Vividha-school/portfolio", // Replace with actual GitHub repo
  },
];

const Projects = () => {
  return (
    <Container fluid className="projects-section">
      <Container>
        <h1 className="projects-title">
          My <span className="purple">Projects</span>
        </h1>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} key={index}>
              <Card className="project-card" onClick={() => window.open(project.link, "_blank")}>
                <Card.Body>
                  <div className="project-icon">{project.icon}</div>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;