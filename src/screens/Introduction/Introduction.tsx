import React, { useEffect } from "react";
// import image from "../assets/images/utsav.png";
import image from "../../assets/images/prog3.gif";
// import Loader from "../../Components/Basics/Loader";
// import CodeSnipp from "../../Components/CodeSnipp/CodeSnipp";
import "./Introduction.scss";
// import { setInterval } from "timers";

function Introduction() {
  
  return (
    <>
    <div className="container">
    {/* <CodeSnipp /> */}
    <div className="row " style={{height:'91vh'}}>
      <div className="intro_text col-md-6 center">
        <p>Hello 👋 <br/><br/>
        I am <span className="myname" data-text="Utsav Kuinkel">Utsav Kuinkel</span>. 
        I am a software engineer. I primarily create dynamic web application using 
        dotnet and also do react for frontend projects.
        <br />
        <br/>
        {/* <span className="branding">Utsav Kuinkel </span> */}
        </p>
        {/* <Loader/> */}
        {/* <CodeSnipp /> */}
        <p className="mail">Get in touch 👉 <span> <a href="mailto:contact-me@utshaav.com.np">contact-me@utshaav.com.np</a></span></p>
      </div>
      <div className="col-md-6 center image" style={{  }} >
      <img className="" src={image} alt="Mero pic lol" />
      </div>
    </div>
    
  </div>
  </>
  )
}

export default Introduction