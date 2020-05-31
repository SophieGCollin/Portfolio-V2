import React from "react";
import { Button } from "react-bootstrap";
import "./SubHeading.css";

function SubHeading() {
  return (
    <div className="subHeading">
      <div className="backgroundBox"></div>
      <div className="foregroundBox">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ronnie is
          a cutie!
        </p>
        <Button variant="outline-light">Resumé</Button>
      </div>
    </div>
  );
}

export default SubHeading;
