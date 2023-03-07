import React from 'react';
import "../styles/Projects.css";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/images/focus-pilot.PNG";

function Projects() {
  return (
    <div className="wrapper projects">
      <h1>Projects</h1>
      <div className="ProjectList">
        <ProjectItem name="Focus Pilot" image={Proj1}/>


      </div>

    </div>
  )
}

export default Projects