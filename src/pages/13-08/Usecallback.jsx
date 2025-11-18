import { useCallback, useState } from "react";
import Memo from "../10-08/Memo";
const Usecallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // const increment = () => {
  //   setCounter2(counter2 + 1);
  // };

  const increment = useCallback(() => setCounter((prev) => prev + 1), []);

  const increment2 = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <>
      <h1> Usecallback Counter1 : {counter}</h1>
      <button onClick={increment}>Increment</button>
      <h1> Counter2 : {counter2}</h1>
      <button onClick={increment2}>Increment</button>

      <Memo counter={counter} increment={increment} countercallback={counter} />
    </>
  );
};

export default Usecallback;
