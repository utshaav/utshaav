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
import Arrow from "../../Components/Arrow";
// import { setInterval } from "timers";
interface HandleChange {
  direction: "next" | "previous",
  index: number,
  event: React.MouseEvent | Event
}

function Introduction() {
  let i: number = 0;
  // function handlePageChange(param: HandleChange) {
  //   debugger;
  //   // if (!(i >= 0 && i <= 1)) return;
  //   if (param.direction === "next") {
  //     i++;
  //     window.scrollBy({ top: document.documentElement.clientHeight, behavior: "smooth" })
  //     // param.event.preventDefault();
  //   }
  //   if (param.direction === "previous") {
  //     i--;
  //     window.scrollBy({ top: (document.documentElement.clientHeight) * -1, behavior: "smooth" })
  //     // param.event.preventDefault();
  //   }
  //   let topStickerArrays = Array.from(document.getElementsByClassName('scroll-animation-container-top') as HTMLCollectionOf<HTMLElement>)
  //   let bottomStickerArrays = Array.from(document.getElementsByClassName('scroll-animation-container-bottom') as HTMLCollectionOf<HTMLElement>)
  //   if (i > 0) {
  //     topStickerArrays.forEach(element => {
  //       element.style.display = "block"
  //     });
  //     // for(let key in ){

  //     // }
  //   }
  //   else {
  //     topStickerArrays.forEach(element => {
  //       element.style.display = "none"
  //     });
  //   }
  //   if (i < 3) {
  //     bottomStickerArrays.forEach(element => {
  //       element.style.display = "block"
  //     });
  //   }
  //   else {
  //     bottomStickerArrays.forEach(element => {
  //       element.style.display = "none"
  //     });
  //   }
  // }
  // let oldScrollY = window.scrollY;

  // window.onwheel = (e) => {

  //   console.log(e.deltaY)

  //   if(e.deltaY > 0){
  //     handlePageChange({direction:"next", index: 1, event:e})
  //   }
  //   else{
  //     handlePageChange({direction:"previous", index: 1, event:e})
  //   }
  //   // oldScrollY = window.scrollY
  // }

  // useEffect(() => {
  //   var body = document.getElementsByTagName('body') as HTMLCollectionOf<HTMLElement>;
  //   Array.from(body).forEach(element => {
  //     element.style.overflowY = 'hidden'
  //   });
  // })
  return (
    <>
      <div className="container">
        {/* <CodeSnipp /> */}
        <div className="row s-row" style={{ height: '100vh', paddingTop: '10vh' }}>
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
          <div className="scroll-animation-container-top" style={{ display: "none" }}>
            {/* <div className="scroll-animation top" onClick={(e) => handlePageChange({ direction: "previous", index: 1, event: e })}></div> */}
            <div className="scroll-animation top"></div>
          </div>
          <div className="scroll-animation-container-bottom">
            {/* <div className="scroll-animation bottom" onClick={(e) => handle`PageChange({ direction: "next", index: 1, event: e })}></div> */}
            <div className="scroll-animation bottom"></div>
          </div>
          {/* <a href="#brief"> */}

            <div className="bottom-left">
              <span className="text">BRIEF</span>
              <Arrow />
            </div>
          {/* </a> */}
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

      {/* <div className="bottom-sticker ">
        { <div className="triangle">
        </div> }
        <div>

          <a href="#" title="Previous section"  onClick={(e) => handlePageChange({ direction: "previous", index: 1, event: e })} >👆</a>

          <a href="#" title="Next Section" onClick={(e) => handlePageChange({ direction: "next", index: 1, event: e })} >👇</a>
        </div>

      </div> */}
    </>
  )
}

export default Introduction