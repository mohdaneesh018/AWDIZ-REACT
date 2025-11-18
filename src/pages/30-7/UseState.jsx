import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(1);
  return (
    <>
      <h1>UseState hook</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button
        onClick={() => setCounter((prev) => (prev > 1 ? prev - 1 : prev))}
      >
        Decrement
      </button>
      <button onClick={() => setCounter(1)}>Reset</button>
    </>
  );
};

export default UseState;
