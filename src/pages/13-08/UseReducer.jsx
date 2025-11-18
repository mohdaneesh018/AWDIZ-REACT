import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state > 0 ? state - 1 : state;
    case "reset":
      return 0;
    default:
      return state;
  }
}

const UseReducer = () => {
  const [counter, dispatch] = useReducer(reducer, 0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>UseReducer</h1>
      <h1>Counter : {counter}</h1>
      <button
        style={{ padding: "10px", marginRight: "10px", cursor: "pointer" }}
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment +
      </button>
      <button
        style={{ padding: "10px", cursor: "pointer", marginRight: "10px" }}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement -
      </button>
      <button
        style={{ padding: "10px", cursor: "pointer" }}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;
