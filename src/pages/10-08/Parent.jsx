import { useState } from "react";
import Memo from "./Memo";

const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <>
      <h1>Parent Component</h1>
      <h2>{counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}> Increment</button>\
      <h2>{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}> Increment</button>
      <Memo counter={counter} />
    </>
  );
};

export default Parent;
