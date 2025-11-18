import { useRef } from "react";

const UseRef = () => {
  const counter = useRef(0);
  return (
    <>
      <h1>UseRef</h1>
      <h1>{counter.current}</h1>
      <button
        onClick={() => {
          counter.current = counter.current + 1;
          console.log("counter", counter.current);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseRef;
