import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/main.css";

function Footer() {
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const year = new Date().getFullYear();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            SERVICE_ID,      
            TEMPLATE_ID,     
            form.current,
            PUBLIC_KEY       
        )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message sent successfully!");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Failed to send message.");
                }
            );
    };


    return (

        <section id="footer" className="footer">
            <div className="footer1">
                <h4>About Me</h4>
                <p>
                    I’m a passionate Computer Science student exploring the world of web development. Skilled in building responsive and user-friendly websites, I strive to create unique and impactful digital experiences. Always eager to learn and grow in the tech field!
                </p>
                <p>Copyright &copy;{year} QReatify. All Right Reserved!</p>
            </div>
            <div className="foot2">
                <h4>Quick Navigations</h4>
                <div className="footnav">
                    <a href="https://github.com/sadikxdev/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + "/images/github.png"} className="qimg" alt="Github" />
                    </a>
                    <a href="www.linkedin.com/in/sadik-shaikh-994b51266/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + "/images/linkedin.png"} className="qimg" alt="LinkedIn" />
                    </a>
                </div>
                <div className="footnav">
                    <a href="http://www.instagram.com/sadikxdev18/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + "/images/insta.png"} className="qimg" alt="Instagram" />
                    </a>
                    <a href="https://x.com/sadikxdev18/" target="_blank" rel="noopener noreferrer">
                        <img src={process.env.PUBLIC_URL + "/images/twitter.png"} className="qimg" alt="X" />
                    </a>
                </div>
            </div>
            <div className="contact">
                <h4>Contact Me</h4>
                <form ref={form} onSubmit={sendEmail} className="contactForm">
                    <input className="contactInput" type="text" placeholder="Enter Name..." name="name" required />
                    <input className="contactInput" type="email" placeholder="Enter Email..." name="user_email" required />
                    <textarea name="message" className="contactMessage" placeholder="Enter Message..." rows='3' required></textarea>
                    <button className="contactBTN" type="submit">Contact Me</button>
                </form>
            </div>
        </section>
    );
}

export default Footer;
