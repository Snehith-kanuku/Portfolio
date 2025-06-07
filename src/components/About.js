import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import myImg from "../Assets/image1.png"; // Replace with your image
import { motion } from "framer-motion";
import "./About.css"; // Ensure you have this CSS file for styling

const About = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="about-description">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ fontSize: "2.6em" }}
            >
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="about-body"
            >
              I am passionate about **software development**, specializing in{" "}
              <i>
                <b className="purple"> Java, React.js, and Spring Boot.</b>
              </i>
              <br />
              <br />
              My interests revolve around{" "}
              <i>
                <b className="purple">
                  Backend Development, Web Technologies, and Cloud Computing.
                </b>
              </i>{" "}
              I love building **high-performance applications** with **Spring Boot** and crafting **dynamic UIs** using **React.js**.
              <br />
              <br />
              I actively contribute to open-source projects and constantly **explore new technologies** to enhance my development skills.
            </motion.p>
          </Col>

          <Col md={4} className="myAvatar">
            <Tilt>
              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={myImg}
                className="img-fluid"
                alt="Profile"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
