import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "RESET":
            return { count: 0 };

        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>UseReducer:</h1>
            <h2>Count: {state.count}</h2>
            <button
                style={{ padding: "10px", marginRight: "10px", cursor: "pointer" }}
                onClick={() => dispatch({ type: "INCREMENT" })}
            >
                Increament 
            </button>
            <button
                style={{ padding: "10px", marginRight: "10px", cursor: "pointer" }}
                onClick={() => dispatch({ type: "DECREMENT" })}
            >
                Decreament 
            </button>
            <button
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => dispatch({ type: "RESET" })}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;