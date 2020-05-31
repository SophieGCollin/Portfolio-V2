import React from "react";
import "./Heading.css";
import { ReactComponent as Triangle } from "./Triangle.svg";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  if (currentTime < 12) {
    greeting = "Good Morning";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Night";
  }
  return (
    <div className="heading">
      <Triangle className="svg" />
      <h1 className="headingText">
        {greeting}
        <span className="punctuation">,</span>
      </h1>
      <div>
        <p className="headingParagraph headingText">
          I am <br />
          Sophie Collin
        </p>
      </div>
    </div>
  );
}

export default Heading;
