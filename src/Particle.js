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
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
        },
      }}
    />
  );
};

export default Particle;
