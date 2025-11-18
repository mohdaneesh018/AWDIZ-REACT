import { useContext } from "react";
import { CalculatorContext } from "./CalcContext/CalculatorContext";

const Calculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const handleClick = (btn) => {
    if (btn === "=") {
      dispatch({ type: "CALCULATE" });
    } else if (btn === "C") {
      dispatch({ type: "CLEAR" });
    } else if (btn === "⌫") {
      dispatch({ type: "BACKSPACE" });
    } else {
      dispatch({ type: "ADD_INPUT", payload: btn });
    }
  };

  return (
    <div
      style={{
        maxWidth: "250px",
        margin: "30px auto",
        padding: "20px",
        border: "2px solid #333",
        borderRadius: "10px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Calculator (Context)</h2>
      <input
        type="text"
        value={state.input}
        readOnly
        style={{
          width: "100%",
          height: "40px",
          marginBottom: "10px",
          fontSize: "18px",
          textAlign: "right",
          padding: "5px",
        }}
      />

      {/* Button layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "5px",
        }}
      >
        {/* Top row with Backspace */}
        {["C", "⌫", "%", "-"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={btnStyle}>
            {btn}
          </button>
        ))}

        {/* Row 2 */}
        {["7", "8", "9", "+"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={btnStyle}>
            {btn}
          </button>
        ))}

        {/* Row 3 */}
        {["4", "5", "6", "*"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={btnStyle}>
            {btn}
          </button>
        ))}

        {/* Row 4 */}
        {["1", "2", "3", "/"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)} style={btnStyle}>
            {btn}
          </button>
        ))}

        {/* Last row */}
        <button
          onClick={() => handleClick("0")}
          style={{ ...btnStyle, gridColumn: "span 2" }}
        >
          0
        </button>
        <button onClick={() => handleClick(".")} style={btnStyle}>
          .
        </button>
        <button onClick={() => handleClick("=")} style={btnStyle}>
          =
        </button>
      </div>
    </div>
  );
};

// Reusable button style
const btnStyle = {
  padding: "15px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #555",
  cursor: "pointer",
};

export default Calculator;
