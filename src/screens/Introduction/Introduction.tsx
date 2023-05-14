import React, { useEffect, useState } from "react";
// import image from "../assets/images/utsav.png";
import image from "../../assets/images/prog3.gif";
// import Loader from "../../Components/Basics/Loader";
// import CodeSnipp from "../../Components/CodeSnipp/CodeSnipp";
import "./Introduction.scss";
import Experience from "./Experience";
import Background from "./Background";
import { Collection } from "typescript";
import Skills from "./Skills";
// import { setInterval } from "timers";
interface HandleChange {
  direction: "next" | "previous",
  index: number,
  event: React.MouseEvent
}

function Introduction() {
  let i: number = 1;
  function handlePageChange(param: HandleChange) {
    debugger;
    // if (!(i >= 0 && i <= 1)) return;
    if (param.direction === "next") {
      i++;
      window.scrollBy({ top: document.documentElement.clientHeight,behavior: "smooth"})
      param.event.preventDefault();
    }
    if (param.direction === "previous") {
      i--;
      window.scrollBy({ top: (document.documentElement.clientHeight) * -1,behavior: "smooth" })
      param.event.preventDefault();
    }
    // let topStickerArrays = Array.from(document.getElementsByClassName('top-sticker') as HTMLCollectionOf<HTMLElement>)
    // let bottomStickerArrays = Array.from(document.getElementsByClassName('bottom-sticker') as HTMLCollectionOf<HTMLElement>)
    // if (i > 0) {
    //   topStickerArrays.forEach(element => {
    //     element.style.display = "block"
    //   });
    //   // for(let key in ){

    //   // }
    // }
    // else {
    //   topStickerArrays.forEach(element => {
    //     element.style.display = "none"
    //   });
    // }
    // if (i < 0) {
    //   bottomStickerArrays.forEach(element => {
    //     element.style.display = "block"
    //   });
    // }
    // else {
    //   bottomStickerArrays.forEach(element => {
    //     element.style.display = "none"
    //   });
    // }
  }
  document.addEventListener('scroll', event => {
    console.log(event);
  })
  useEffect(() => {
    var body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
    Array.from(body).forEach(element => {
       element.style.overflowY = 'hidden'
    });
   })
  return (
    <>
      <div className="container">
        {/* <CodeSnipp /> */}
        <div className="row " style={{ height: '93vh' }}>
          <div className="intro_text col-md-6 center">
            <p>Hello 👋 <br /><br />
              I am <span className="myname" data-text="Utsav Kuinkel">Utsav Kuinkel</span>.
              I am a software engineer. I primarily create dynamic web application using
              dotnet and also do react for frontend projects.
              <br />
              <br />
              {/* <span className="branding">Utsav Kuinkel </span> */}
            </p>
            {/* <Loader/> */}
            {/* <CodeSnipp /> */}
            <p className="mail">Get in touch 👉 <span> <a href="mailto:contact-me@utshaav.com.np">contact-me@utshaav.com.np</a></span></p>
          </div>
          <div className="col-md-6 center image" style={{}} >
            <img className="" src={image} alt="Mero pic lol" />
          </div>
        </div>
        <Background />
        <Skills />
        <Experience />

      </div>
      {/* <div className="top-sticker" style={{ display: 'none' }}>
        <div className="triangle">
        </div>
        <a href="#" >Next</a>

      </div> */}

      <div className="bottom-sticker ">
        {/* <div className="triangle">
        </div> */}
        <div>

          <a href="#" title="Previous section"  onClick={(e) => handlePageChange({ direction: "previous", index: 1, event: e })} >👆</a>

          <a href="#" title="Next Section" onClick={(e) => handlePageChange({ direction: "next", index: 1, event: e })} >👇</a>
        </div>

      </div>
    </>
  )
}

export default Introduction