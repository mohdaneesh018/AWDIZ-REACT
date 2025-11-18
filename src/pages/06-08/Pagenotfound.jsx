import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
  const [counter, setCounter] = useState(5);
  const router = useNavigate();
  useEffect(() => {
    if (counter === 0) {
      router("/");
      return;
    }

    const timeout = setTimeout(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [counter]);
  return (
    <div>
      <h1 style={{ color: "red" }}>Page Not Found</h1>
      <p style={{ fontWeight: "bolder", fontSize: "30px" }}>
        You are redirecting to homepage in......... {counter} seconds
      </p>
    </div>
  );
};

export default Pagenotfound;
