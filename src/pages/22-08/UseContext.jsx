import { useContext } from "react";
import { Context } from "./Context/ContextProvider";

const UseContext = () => {
  const { count, dispatch } = useContext(Context);

  return (
    <>
      <h1>UseContext</h1>
      <p>count : {count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
    </>
  );
};

export default UseContext;
