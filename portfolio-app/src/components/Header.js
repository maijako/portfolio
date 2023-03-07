import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header-wrapper">
        <div className="main-info">
            <h1 className="greeting">Hi, I'm Maija</h1>
            <p className="blurb">A web developer with a passion for learning and creating.</p> 
        </div>
    </div>
  )
}

export default Header