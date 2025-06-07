import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaLinkedin, FaFilePdf } from "react-icons/fa";
import "./Contact.css"; // Ensure this CSS file is included

const Contact = () => {
  return (
    <Container fluid className="contact-section">
      <Container>
        <h1 className="contact-title">
          Get In <span className="purple">Touch</span>
        </h1>
        <Row>
          {/* Contact Info */}
          <Col md={6} className="contact-info">
            <div className="contact-details">
              <p>
                <FaEnvelope /> Email:{" "}
                <a href="mailto:kanukusnehith26@gmail.com">
                  kanukusnehith26@gmail.com
                </a>
              </p>
              <p>
                <FaPhone /> Phone: +91 63029 76763
              </p>
              <p>
                <FaLinkedin /> LinkedIn:{" "}
                <a href="https://www.linkedin.com/in/snehith-kanuku-019a0529a/">
                  linkedin.com/in/snehith-kanuku
                </a>
              </p>
            </div>
          </Col>

          {/* Resume Display */}
          <Col md={6} className="resume-section">
            <h3>My Resume</h3>
            <iframe
              src={`${process.env.PUBLIC_URL}/snehith_resume.pdf`}
              width="100%"
              height="500px"
              title="Resume Preview"
            ></iframe>
            <Button
              variant="primary"
              className="resume-button"
              href={`${process.env.PUBLIC_URL}/snehith_resume.pdf`}
              download
            >
              <FaFilePdf /> Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;