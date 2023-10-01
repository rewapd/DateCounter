import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleCountPlus() {
    setCount((s) => s + step);
  }
  function handleCountMinus() {
    setCount((s) => s - step);
  }
  return (
    <div>
      <div>
        <button className="btn" onClick={handleStepMinus}>
          -
        </button>
        <span> Step : {step} </span>
        <button className="btn" onClick={handleStepPlus}>
          +
        </button>
      </div>
      <div>
        <button className="btn" onClick={handleCountMinus}>
          {" "}
          -{" "}
        </button>
        <span> Count : {count} </span>
        <button className="btn" onClick={handleCountPlus}>
          {" "}
          +{" "}
        </button>
      </div>

      <p>
        <span>{count === 0 ? `Today is ${date.toDateString()}` : ""}</span>
        <span>
          {count > 0
            ? `${count} days from Today is ${date.toDateString()}`
            : ""}
        </span>
        <span>
          {count < 0
            ? `${count * -1} days ago from Today is ${date.toDateString()}`
            : ""}
        </span>
      </p>
    </div>
  );
}
