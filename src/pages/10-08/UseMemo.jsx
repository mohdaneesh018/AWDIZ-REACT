import { useMemo, useState } from "react";

const nums = new Array(30000000).fill(0).map((item, i) => ({
  index: i,
  ismagical: i === 10000000,
}));

const UseMemo = () => {
  const [counter, setCounter] = useState(0);

  const [arr, setArr] = useState(nums);
  const magicalNumber = useMemo(
    () => arr.find((item) => item.ismagical === true),
    [arr]
  );
  return (
    <>
      <h1>UseMemo</h1>

      <h1>Magical number {magicalNumber?.index}</h1>
      <p>If counter is 10 heavy calculation is done</p>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          if (counter === 10) {
            setArr(
              new Array(30000000).fill(0).map((item, i) => ({
                index: i,
                ismagical: i === 9000000,
              }))
            );
          }
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseMemo;
