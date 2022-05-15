import React from "react";
import image from "../assets/images/utsav.png";
import "./Introduction.scss";

function Introduction() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 center">
          <p className="intro_text">Hello, </p> 
          <p>I am a software engineer based in Nepal</p>
          <p className="branding">Utsav Kuinkel</p>
        </div>
        <div className="col-md-6" style={{ backgroundColor: "", height: '92vh' }}>

        </div>
      </div>
      <img className="corner-image" src={image} alt="Mero pic lol" />
    </div>
  )
}

export default Introduction