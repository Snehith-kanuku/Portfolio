import Typewriter from "typewriter-effect";

import "./Type.css"; // Assuming you have a CSS file for styling

// Type component for animated typewriter effect
function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Java Developer",
          "React.js Enthusiast",
          "Spring Boot Specialist",
          "MERN Stack Developer",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
