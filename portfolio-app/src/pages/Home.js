import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className="wrapper">
      <div className="about">
        <h1> About Me </h1>
        <p>
        I'm an experienced EdTech professional and Front-end Web Developer, with over 7 years of experience in Product Management, Agile, Scrum, Learning Experience Design, and a background in Second Language Acquisition. My work ranges from learning experience design to web development
        </p>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <p>
          JavasScript, Node.js, ReactJS, NPM, HTML, CSS, BootStrap, jQuery
        </p>
      </div>
      <div className="CV">
        <h1>CV</h1>
      <div className="buttoncontainer">
        <a href="../assets/pdf/MKozlova-Dev-CV.pdf" download="" className="btn btn-primary">Download
        </a>
      </div>
      </div>
    </div>
  )
}

export default Home