import React from 'react';
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/images/focus-pilot.PNG";
import Proj2 from "../assets/images/adventures.png";
import Proj3 from "../assets/images/exam-lift-fb.jpg";
import Proj4 from "../assets/images/weather-demo.png";
import Proj5 from "../assets/images/code-quiz.gif";

function Projects() {
  return (
    <div className="wrapper projects">
      <h1>Projects</h1>
      <div className="ProjectList">
        <ProjectItem name="Focus Pilot" image={Proj1}/>
        <ProjectItem name="Adventures in English" image={Proj2}/>
        <ProjectItem name="Exam Lift" image={Proj3}/>
        <ProjectItem name="Weather Dashboard" image={Proj4}/>
        <ProjectItem name="Code Quiz" image={Proj5}/>
      </div>
    </div>
  )
}

export default Projects