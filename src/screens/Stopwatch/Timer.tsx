import * as React from "react";

type TimerProps = {
  time: number;
};

function Timer({ time }: TimerProps) {
  const [min, setMin] = React.useState<number>(0);
  const [sec, setSec] = React.useState<number>(0);
  const makeTimeForm = (time: number): void => {
    if (time < 60) {
      setMin(0);
      setSec(time);
    } else {
      let min = Math.floor(time / 60);
      let sec = time - min * 60;
      setSec(sec);
      setMin(min);
    }
  };
  React.useEffect((): void => {
    makeTimeForm(time);
  }, [time]);

  return (
    <div>
      <span className="time" id="timer" data-text="88:88">{String(min).padStart(2, '0') }:{String(sec).padStart(2, '0')}</span>
      {/* <span className="unit">min</span>
      <span className="time right">{sec}</span>
      <span className="unit">sec</span> */}
    </div>
  );
}

export default Timer;
