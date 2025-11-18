import { memo } from "react";

const Memo = ({ counter, increment, countercallback }) => {
  console.log("childern rendered");
  return (
    <>
      <h1> children component counter : {countercallback}</h1>
      <h1>Children Component : {counter}</h1>

      <button onClick={increment}>
        this button is from memo(children component)
      </button>
    </>
  );
};

export default memo(Memo);
