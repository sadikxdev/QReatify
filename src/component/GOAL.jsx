import React from "react";


function GOAL() {
    return (
        <div className="goal">
            
            <div className="goal1">
                <img src={process.env.PUBLIC_URL + "/images/target.png"} alt="Bulls Eye" className="goalImg" />
                <h3>Objective</h3>
                <ul>
                    <li>To create a user-friendly QR code generator
                        using modern web technologies.</li>
                    {/* <li>To ensure cross-platform compatibility and
                        accessibility.</li> */}
                    <li>To enhance data privacy and user control over
                        generated QR codes.</li>
                    <li>To generate dowloadable QR codes.</li>
                </ul>
            </div>

            <div className="goal1">
                <img src={process.env.PUBLIC_URL + "/images/scope.png"} alt="Scope" className="goalImg"/>
                    <h3>Scope</h3>
                    <ul>
                        <li>Developing dynamic web application for QR
                            code generation.</li>
                            <li>Supporting real-time preview and download of QR
                                codes.</li>
                                <li>Implementing a feature to save generated QR codes
                                    in PNG format.</li>
    
                    </ul>
            </div>

            <div className="goal1">
                <img src={process.env.PUBLIC_URL + "/images/speedometer.png"} alt="Speed Meter" className="goalImg"/>
                    <h3>Limitations</h3>
                    <ul>
                        <li>Limited to generating static QR codes.</li>
                        <li>Need good speed of Internet.</li>
                            <li>Requires internet access to download
                                dependencies initially.</li>
                                <li>It can only converts the URL into QR codes.</li>
                    </ul>
            </div>

        </div>
    );
}

export default GOAL;