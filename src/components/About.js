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
                          className="home-about-body"
                        >
                          I have a deep passion for programming and have honed my skills in{" "}
                          <i>
                            <b className="purple"> Java, React.js, and Spring Boot.</b>
                          </i>
                          <br />
                          <br />
                          My interests revolve around{" "}
                          <i>
                            <b className="purple">Backend Development, Web Technologies .</b>
                          </i>{" "}
                          <p>with a focus on scalable and high-performance applications. </p>
                          <br />
                        
                          I love building innovative solutions using{" "}
                          <b className="purple">Spring Boot</b> for backend systems and modern frameworks like{" "}
                          <i>
                            <b className="purple">React.js & Thymeleaf</b> for front-end development.
                          </i>
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
