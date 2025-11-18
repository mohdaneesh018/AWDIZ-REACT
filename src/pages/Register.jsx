import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    cpassword: "",
  });

  const [error, setError] = useState({});
  const [passhandle, setPasshandle] = useState({
    password: false,
    cpassword: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!userData.name) newErrors.name = "Name is required";
    if (!userData.email) newErrors.email = "Email is required";
    if (!userData.password) newErrors.password = "Password is required";
    if (!userData.role) newErrors.role = "Role is required";
    if (!userData.cpassword)
      newErrors.cpassword = "Confirm password is required";
    if (
      userData.password &&
      userData.cpassword &&
      userData.password !== userData.cpassword
    ) {
      newErrors.cpassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/auth/register",
        userData
      );
      if (res.data.success) {
        alert(res.data.message);
        setUserData({ name: "", email: "", password: "", cpassword: "" });
        setError({});
        setPasshandle({ password: false, cpassword: false });
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setError({ ...error, [e.target.name]: "" });
    console.log(userData);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid black",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Name:</label>
          <input
            name="name"
            value={userData.name}
            onChange={handleChange}
            type="text"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.name && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Email:</label>
          <input
            name="email"
            value={userData.email}
            onChange={handleChange}
            type="email"
            style={{ width: "95%", padding: "8px" }}
          />
          {error.email && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.email}</p>
          )}
        </div>

        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={userData.role}
            onChange={handleChange}
            style={{ marginLeft: "8px" }}
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
          {error.role && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.role}</p>
          )}
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Password:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              type={passhandle.password ? "text" : "password"}
              style={{ flex: 1, padding: "8px" }}
            />
            <button
              type="button"
              onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            >
              {passhandle.password ? "Hide" : "Show"}
            </button>
          </div>
          {error.password && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div style={{ marginBottom: "12px", textAlign: "left" }}>
          <label>Confirm Password:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              name="cpassword"
              value={userData.cpassword}
              onChange={handleChange}
              type={passhandle.cpassword ? "text" : "password"}
              style={{ flex: 1, padding: "8px" }}
            />
            <button
              type="button"
              onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  cpassword: !prev.cpassword,
                }))
              }
            >
              {passhandle.cpassword ? "Hide" : "Show"}
            </button>
          </div>
          {error.cpassword && (
            <p style={{ color: "red", fontSize: "0.9em" }}>{error.cpassword}</p>
          )}
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Register"
          style={{
            width: "100%",
            padding: "10px",

            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
};

export default Register;
