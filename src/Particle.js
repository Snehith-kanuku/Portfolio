import React from "react";
import { Particles } from "react-tsparticles";

import { loadSlim } from "tsparticles-slim"; // Try using 'loadSlim' instead of 'loadFull'

const Particle = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine); // Changed from loadFull to loadSlim
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "", // Changed to a solid color for better visibility
        },
        particles: {
          number: { value: 80 },
          size: { value: 4 },
          move: { enable: true, speed: 1 },
          shape: { type: "circle" },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          anim: { enable: false, speed: 1, sync: false },

          bounce: false,  
          repulse: {
            enable: true,
            distance: 100,
            duration: 1,
          },
          rotate: {
            value: 0,
            direction: "clockwise",
            animation: { enable: false, speed: 5, sync: false },
          },
          tilt: {
            value: 0,
            direction: "clockwise",
            animation: { enable: false, speed: 5, sync: false },
          },
          roll: {
            darken: { enable: false, value: 0.5 },
            enable: false,
            speed: 25,
          },
          wobble: {
            enable: false,
            distance: 30,
            speed: 10,
          },
          remove: {
            particles_nb: 5,
          },
          shadow: {
            enable: false,
            color: "#000",
            blur: 5,
            offset: { x: 0, y: 0 },
          },
          // Added life cycle for particles
          life: {
            duration: {
              sync: false,
              value: {
                min: 2,
                max: 4,
              },
            },
            delay: {
              sync: false,
              value: {
                min: 0,
                max: 0,
              },
            },
        
          },
         
          
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, links: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 },
          },
        },

        
      }}
    />
  );
};

export default Particle;
