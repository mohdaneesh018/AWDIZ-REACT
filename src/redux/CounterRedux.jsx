import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const CounterRedux = () => {
  const counter = useSelector((store) => store);
  console.log(counter)
  const dispatch = useDispatch();
  return (
    <>
      {/* <h1>Redux Counter : {counter}</h1> */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
};

export default CounterRedux;
