import { createContext, useReducer } from "react";

export const Context = createContext();

// Counter reducer
function handleCounter(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Theme reducer
function handleMode(state, action) {
  switch (action.type) {
    case "toggle":
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("mode", JSON.stringify(newTheme));
      return { theme: newTheme };

    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  // Load theme from localStorage on first render
  const savedTheme = JSON.parse(localStorage.getItem("mode")) || "light";

  const [counter, dispatch] = useReducer(handleCounter, { count: 0 });
  const [mode, dispatchMode] = useReducer(handleMode, { theme: savedTheme });

  const value = {
    dispatchMode,
    apptheme: mode.theme,
    count: counter.count,
    dispatch,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
