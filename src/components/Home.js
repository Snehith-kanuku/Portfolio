import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import HomeIntro from "./HomeIntro";
import Type from "./Type";
import { motion } from "framer-motion";
import homeLogo from "../Assets/image.png"; // Replace with your image
import "./Home.css"; // Assuming you have a CSS file for styling

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            {/* Left Side - Introduction */}
            <Col md={7} className="home-header">
              <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                className="heading-name"
              >
                I'M <strong className="main-name">SNEHITH KANUKU</strong>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                style={{ padding: 50, textAlign: "left" }}
              >
                <Type />
              </motion.div>
            </Col>

            {/* Right Side - Image */}
            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="Portfolio showcase image"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <HomeIntro />
    </section>
  );
};

export default Home;
