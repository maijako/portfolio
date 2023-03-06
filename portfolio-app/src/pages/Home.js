import React from 'react';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, I'm Maija</h2>
        <div className="prompt">
          <p>
            A software developer with a passion for learning.
          </p>
        </div>
      </div>
      <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2>Technical</h2>
            <span>JavasScript, NodeJs, ReactJs, HTML, CSS, BootStrap, NPM</span>
          </li>
          <li className="item">
            <h2>Other</h2>
            <span>Learning Design, Product Management, Agile</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home