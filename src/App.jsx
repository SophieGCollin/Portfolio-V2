import React from "react";
import "./App.css";
import Heading from "./components/Heading/Heading";
import SubHeading from "./components/SubHeading/SubHeading";
import Projects from "./components/ProjectsSection/Projects";
import Skills from "./components/SkillsSection/Skills";
import Contact from "./components/ContactSection/Contact";

function App() {
  return (
    <div className="App">
      <Heading />
      <SubHeading />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
