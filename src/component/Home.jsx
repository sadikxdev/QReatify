import React from "react";
import "../CSS/main.css"
import Input from "./input";
function Home() {
    return (
        <section id="home">
            <div className="home">
                <div className="home1">
                    <h1>Welcome to QReatify!!</h1>
                    <h4>An online platform to generate QR codes easily!</h4>
                </div>

                <Input />

            </div>
        </section>
    );

}

export default Home;