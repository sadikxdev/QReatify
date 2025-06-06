import React from "react";
import '../CSS/form.css'
function Form(props){
    return (
         <div
  className="input-div inputDiv">
      <form id="form" onSubmit={props.handleSubmit}>
        <h1>QR Code Generator</h1>
        <div className="selectType">
        <select id="dataType" className="input-select" defaultValue=''>
          <option value="url">Select Data Type</option>
          <option value="url">URL to QR</option>
          <option value="text">Text to QR</option>
        </select>
        </div>
        <input
          type="text"
          name="dataInput"
          id="dataInput"
          placeholder="Enter URL or Text..."
          className="input-data"
          required
        />
        <input
          type="text"
          name="imageName"
          id="imageName"
          placeholder="Enter QR Name..."
          className="input-data"
          required
        />
        <button type="submit" className="BTN">Generate QR Code</button>
      </form>
    </div>
    );
}

export default Form;