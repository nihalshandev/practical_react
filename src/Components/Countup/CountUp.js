import React from "react";
import CountUp, { useCountUp } from "react-countup";

const ReactCountup = () => {
  // const [count, setCount] = useState(1000)\
  const { countUp, start, pauseResume, reset, update } = useCountUp({
    duration: 5,
    end: 10000,
    delay: 2,
    startOnMount: false,
  });
  return (
    <div>
      {/* <button onClick={()=> setCount(count + 10)}>Icreace Count</button> */}
      <h1>
        <div>
          <CountUp end={200} duration={2} />
        </div>
        <div>
          <CountUp end={200} duration={5} start={500} />
        </div>
        <div>
          <CountUp end={500} duration={5} start={1000} />
        </div>
        <div>
          <CountUp duration={5} end={1000} prefix="$" decimals={2} />
        </div>
        <div>
          <CountUp duration={5} end={1000} suffix="USD" decimals={2} />
        </div>
      </h1>
      <div>
        <h1>{countUp}</h1>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pouse/Resume</button>
        <button onClick={() => update(2000)}>Start</button>
      </div>
    </div>
  );
};

export default ReactCountup;
