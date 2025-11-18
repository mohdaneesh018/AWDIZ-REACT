import React, { useReducer } from "react";

export const CalculatorContext = React.createContext();

const initialState = {
  input: "",
};

function calculatorReducer(state, action) {
  switch (action.type) {
    case "ADD_INPUT":
      return { ...state, input: state.input + action.payload };
    case "CLEAR":
      return { ...state, input: "" };
    case "BACKSPACE":
      return { ...state, input: state.input.slice(0, -1) };
    case "CALCULATE":
      try {
        return { ...state, input: eval(state.input).toString() };
      } catch {
        return { ...state, input: "Error" };
      }
    default:
      return state;
  }
}

const CalculatorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <CalculatorContext.Provider value={value}>
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
