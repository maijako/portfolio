import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../components/logo.png";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

                <a className="navbar-brand" href="https://www.linkedin.com/in/maijakozlova" target="blank"><img className="logo" src={logo} alt="logo..." /></a>
                <button className="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mt-2 mt-lg-0 ms-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link">Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experience" className="nav-link">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar