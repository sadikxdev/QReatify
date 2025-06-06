import React from "react";
import "../CSS/main.css";

function Header() {
  return (
    <header>
      <a className="homeroute" href="https://sadikxdev.github.io/QReatify/"><div className="title"><h1>QReatify</h1></div></a>
      <div className="nav">
        <a href="#home" className="navlink">Home</a>
        <a href="#about" className="navlink">About</a>
        <a href="#faq" className="navlink">FAQ's</a>
        <a href="#footer" className="navlink">Contact Me</a>
      </div>
    </header>
  );
}

export default Header;
