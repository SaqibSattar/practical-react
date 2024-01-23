import { useRef, useState } from "react";
import CountUp, { useCountUp } from "react-countup";

function App() {
  const countUpRef = useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div className="App">
      <CountUp end={100} />
      <br />
      <CountUp end={100} duration={5} />
      <br />
      <CountUp start={500} end={1000} duration={5} />
      <br />
      <CountUp
        start={-875.039}
        end={160527.012}
        separator=" "
        decimals={4}
        decimal=","
        prefix="EUR "
        suffix=" left"
        onEnd={() => console.log("Ended! 👏")}
        onStart={() => console.log("Started! 💨")}
      ></CountUp>
      <div ref={countUpRef} />
      <button onClick={start}>Start</button>
      <button onClick={reset}>Reset</button>
      <button onClick={pauseResume}>Pause/Resume</button>
      <button onClick={() => update(2000)}>Update to 2000</button>
    </div>
  );
}

export default App;
