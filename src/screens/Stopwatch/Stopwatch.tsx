import react, { useEffect, useState } from "react";
import "./Stopwatch.scss";

import Timer from "./Timer";
import Button from "./Button";



function Stopwatch() {
const [time, setTime] = useState(0);
const [start, setStart] = useState(false);

useEffect(() => {
  console.log(1);
  let interval : any  = undefined;
  if(start){
    console.log(1);
    interval = setInterval(() => {
      setTime(prev => prev + 1)
    }, 1000)
  } 
  else{
    clearInterval(interval)
  }

  return () => clearInterval(interval);


}, [start])


  // const { time, timer } = state;
  return (
    <div className="stop-watch">
      <div className="timer-wrapper">
        <Timer time={time} />
        <div className="button-wrapper">
          <Button
            title={start ? "stop" : "start"}
            color={start ? "primary" : "success"}
            onClick={start ? () => setStart(false) : () => setStart(true) }
          />
          <Button title="reset" color="danger" onClick={() => {setTime(0); setStart(false)}} />
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;