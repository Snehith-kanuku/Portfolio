import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons
import "./Footer.css"; // Ensure you have this CSS file for styling

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={6} className="footer-copywright">
          <h3>© {new Date().getFullYear()} Snehith Kanuku</h3>
        </Col>
        <Col md={6} className="footer-social">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Snehith-kanuku"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaGithub size={24} /> GitHub
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/snehith-kanuku-019a0529a/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour"
              >
                <FaLinkedin size={24} /> LinkedIn
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;