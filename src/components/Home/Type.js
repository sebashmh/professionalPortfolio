import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (<
    Typewriter options={
      {
        strings: [
          "Engineering Manager",
          "Senior Software Engineer",
          "MERN Stack Developer",
          "Hobbyist Photographer",
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