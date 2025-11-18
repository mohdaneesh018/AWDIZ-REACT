import { useEffect, useState } from "react";

const Useeffect = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(1);

  useEffect(() => {
    console.log("Inside UseEffect hook, Without Dependency");
  });
  useEffect(() => {
    console.log("Inside UseEffect hook, Empty Dependency");
  }, []);
  useEffect(() => {
    console.log("Inside UseEffect hook, Single Dependency");
  }, [counter]);
  useEffect(() => {
    console.log("Inside UseEffect hook, Multiple Dependency");
  }, [counter, counter2]);
  return (
    <>
      <h1>UseEffect hook</h1>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> + </button>
      <button onClick={() => setCounter(counter - 1)}> - </button>
      <h1>Counter2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}> + </button>
      <button onClick={() => setCounter2(counter2 - 1)}> - </button>
    </>
  );
};

export default Useeffect;
