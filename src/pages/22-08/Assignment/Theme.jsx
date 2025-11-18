import { useContext } from "react";
import { Context } from "../Context/ContextProvider";

const Theme = () => {
  const { dispatchMode, apptheme } = useContext(Context);

  const containerStyle = {
    height: "500px",
    backgroundColor: apptheme === "light" ? "#ffffff" : "#000000",
    color: apptheme === "light" ? "#000000" : "#ffffff",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px 0",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleTheme = () => {
    dispatchMode({ type: "toggle" });
  };

  return (
    <div style={containerStyle}>
      <h1>Mode: {apptheme}</h1>
      <button onClick={handleTheme} style={buttonStyle}>
        {apptheme}
      </button>
    </div>
  );
};

export default Theme;
