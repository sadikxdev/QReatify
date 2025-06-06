import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling"; 
import "../CSS/main.css"
import Form from "./Form";
function Input() {
  const qrCodeRef = useRef(null); 
  const containerRef = useRef(null); 
  const [submit, setSubmit] = useState(false);
  const [qrData, setQrData] = useState({ content: "", name: "" });
  const [pattern,setPattern] = useState("square");
  const [frontColor,setfrontColor] = useState("#000000");
  const [backColor,setbackColor] = useState("#ffffff");
  const [cornerSquare,setCornerSquare] = useState("extra-rounded");
  const [cornerDot,setCornerDot] = useState("square");
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataType = e.target.dataType.value;
    let data = e.target.dataInput.value.trim();
    const imageName = e.target.imageName.value.trim();
    if (dataType === "url" && !/^https?:\/\//i.test(data)) {
      data = "https://" + data;
    }

    setQrData({ content: data, name: imageName });
    setSubmit(true);
  };

  function handleChange(e){
    const newPattern = e.target.value;
    setPattern(newPattern);
  }


  useEffect(() => {
    if (submit && qrData.content && containerRef.current) {
      
      containerRef.current.innerHTML = "";

      
      qrCodeRef.current = new QRCodeStyling({
        width: 220,
        height: 220,
        data: qrData.content,
        image: "", 
        dotsOptions: {
          color: frontColor,
          type: pattern
        },
        backgroundOptions: {
          color: backColor
        },
        cornersSquareOptions: {
    type: cornerSquare, 
    color: frontColor
  },
  cornersDotOptions: {
    type: cornerDot, 
    color: frontColor
  }
      });

      
      qrCodeRef.current.append(containerRef.current);
    }
  }, [submit, qrData, frontColor , backColor ,pattern,cornerSquare,cornerDot]);

  function handleBack() {
    setbackColor("#ffffff");
    setfrontColor("#000000");
    setPattern("square");
    setCornerSquare("extra-rounded");
    setCornerDot("square");
    setSubmit(false);
    setQrData({ content: "", name: "" });
  }

  function handleDownload() {
    if (!qrCodeRef.current) return;

    qrCodeRef.current.download({
      name: qrData.name || "qr-code",
      extension: "png"
    });
  }

    function handleFcolor(e){
      const newF = e.target.value;
      setfrontColor(newF);
    }
  
    function handleBcolor(e){
      const newB = e.target.value;
      setbackColor(newB);
    }

    function handleChangeCorner(e){
      const newCorner = e.target.value;
      setCornerSquare(newCorner);
    }

    function handleChangeCornerDot(e){
      const newCornerDot = e.target.value;
      setCornerDot(newCornerDot);
    }

  return submit === false ? (
   <Form handleSubmit={handleSubmit}/>
  ) : (
    <div className="output-div">
      <h2>Here is Your Generated QR Code</h2>
      
  
      <div id="qr-container" ref={containerRef} className="generatedQR"></div>

      
      <div className="colorInputDiv">
        <div className="colorDiv">
      <label  htmlFor="backgroundColor" className="color-label">Background Color :</label>
      <input
        type="color"
        id="backgroundColor"
        value={backColor}
        onChange={handleBcolor}
        className="input-color"
      />
      </div>

      <div className="colorDiv">
      <label htmlFor="foregroundColor" className="color-label">Pattern Color :</label>
      <input
        type="color"
        id="foregroundColor"
        value={frontColor}
        onChange={handleFcolor}
        className="input-color fore-color"
      />
      </div>
    </div>
    <div className="selects">
      {/* <label htmlFor="dotType" className="color-label">Pattern Type :</label> */}
      <select id="dotType" onChange={handleChange} className="input-select" defaultValue=''>
          <option value="" disabled>Select Pattern</option>
          <option value="dots">Dots</option>
          <option value="rounded">Rounded</option>
          <option value="classy">Classy</option>
          <option value="square">Square</option>
          <option value="classy-rounded">Classy Rounded</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>

        {/* <label htmlFor="cornerSquare" className="color-label">Corner :</label> */}
      <select id="cornerSquare" onChange={handleChangeCorner} className="input-select" defaultValue=''>
          <option value="" disabled>Select Corner</option>
          <option value="dots">Dots</option>
          <option value="square">Square</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>

        {/* <label htmlFor="cornerDot" className="color-label">Corner Dot's :</label> */}
      <select id="cornerDot" onChange={handleChangeCornerDot} className="input-select" defaultValue=''>
          <option value="" disabled>Select Corner Dot</option>
          <option value="dot">Dot</option>
          <option value="square">Square</option>
        </select>
        </div>
        <div className="twoBTN">
        <button onClick={handleDownload} className="afterBTN">Download QR Code!</button>
        <button onClick={handleBack} className="afterBTN">Generate More!</button>
        </div>
      </div>
    
  );
}

export default Input;
