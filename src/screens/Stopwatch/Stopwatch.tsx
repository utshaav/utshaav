import react, { useEffect, useState } from "react";
import "./Stopwatch.scss";

import Timer from "./Timer";
import Button from "./Button";
import { prototype } from "stream";


function Stopwatch() {
  const [time, setTime] = useState(0);
  const [preset, setPreset] = useState<"IReading" | "IWriting" | "">("");
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval: any = undefined;
    if (start) {
      let i = time;
      let styleChanged = false;
      interval = setInterval(() => {
        i++;
        setTime(prev => prev + 1)
        if (!styleChanged) {
          if (preset === "IReading") {
            if(i >= 3300 && i < 3600){
            // if(i >= 10 && i < 12){
              document.getElementById("timer")!.style.color = "orange";
            }
            else if (i > 3600) {
            // else if (i > 12) {
              setTime(0);
              document.getElementById("timer")!.style.color = "red";
              styleChanged = true;
            }
          }
          else if (preset === "IWriting") {
            styleChanged = true;
          }
          else{
            styleChanged = true;
          }
        }
      }, 1000)
    }
    else {
      clearInterval(interval)
    }

    return () => clearInterval(interval);


  }, [start,preset])

  let reset = function (){
    setTime(0); 
    setStart(false);
    document.getElementById("timer")!.style.color = "rgb(33 37 41)";
  }


  // const { time, timer } = state;
  return (
    <div className="stop-watch">
      <div className="timer-wrapper">
        <Timer time={time} />
        <div className="button-wrapper">
          <Button
            title={start ? "stop" : "start"}
            color={start ? "primary" : "success"}
            onClick={start ? () => setStart(false) : () => setStart(true)}
          />
          <Button title="reset" color="danger" onClick={reset} />

        </div>
        <div className="presets">
          Presets: &nbsp;&nbsp;
          <div className="form-check form-check-inline">
            <label className="form-check-label" >
              <input className="form-check-input" name="preset" type="radio" onClick={() => setPreset("IReading")} />
              IELTS Reading
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" >
              <input className="form-check-input" name="preset" type="radio" onClick={() => setPreset("IWriting")} />
              IELTS Writing
            </label>
          </div>
          <div className="form-check form-check-inline">
            <label className="form-check-label" >
              <input className="form-check-input" name="preset" type="radio" onClick={() => setPreset("")} />
              None
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stopwatch;