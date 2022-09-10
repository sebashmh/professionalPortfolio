import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (<
    Typewriter options={
      {
        strings: [
          "Computer Scientist",
          "Software Engineer",
          "MERN Stack Developer",
          "Data Analyst Enthusiast",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }
    }
  />
  );
}

export default Type;