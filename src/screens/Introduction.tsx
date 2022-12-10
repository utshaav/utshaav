import React from "react";
// import image from "../assets/images/utsav.png";
import image from "../assets/images/prog3.gif";
import Loader from "../Components/Basics/Loader";
import CodeSnipp from "../Components/CodeSnipp/CodeSnipp";
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
        <div className="col-md-6 center" style={{ backgroundColor: "", height: '90vh' }} >
        <img className="" src={image} alt="Mero pic lol" />
        </div>
      </div>
      
    </div>
  )
}

export default Introduction