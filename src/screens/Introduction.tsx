import React from "react";
import image from "../assets/images/utsav.png";
import Loader from "../components/Basics/Loader";
import CodeSnipp from "../components/CodeSnipp/CodeSnipp";
import "./Introduction.scss";

function Introduction() {
  return (
    <div className="container">
      {/* <CodeSnipp /> */}
      <div className="row ">
        <div className="intro_text col-md-6 center">
          <p>Hello, </p> 
          <p>I am a software engineer based in Nepal</p>
          <p className="branding">Utsav Kuinkel</p>
          <Loader/>
        </div>
        <div className="col-md-6" style={{ backgroundColor: "", height: '92vh' }}>

        </div>
      </div>
      <img className="corner-image" src={image} alt="Mero pic lol" />
    </div>
  )
}

export default Introduction