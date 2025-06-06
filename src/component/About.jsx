import React from "react";
import "../CSS/about.css";
import GOAL from "./GOAL";
function About() {
    return (
        <section id="about">
            <h1 className="aboutHead">About QReatify</h1>
            <div className="about">
                <div className="about1">
                    <h3>What is QReatify?</h3>
                    <p>QReatify is a web-based tool that generates QR codes for URLs, making it easy to share and access links quickly. Users can input a URL, and the platform instantly converts it into a scannable and dowloadable QR code, enhancing convenience and accessibility. Designed to be user-friendly and efficient, QReatify is ideal for personal, business, or educational use. Its goal is to simplify digital interactions by bridging physical and online worlds.</p>
                </div>
                
                <GOAL/>
               
            </div>
        </section>
    );
}

export default About;