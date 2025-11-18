import { useState } from "react";
import axios from "axios";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/blog", formData);
    alert("Blog Added Successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        marginTop: "40px",
        padding: "20px",
        border: "1px solid #ddd",
        background: "darkgreen",
        color: "white",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Create Blog</h2>

      <input
        placeholder="Blog Title"
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <textarea
        placeholder="Write your blog Text..."
        style={{ ...inputStyle, height: "120px" }}
        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
      />

      <input
        placeholder="Username"
        style={inputStyle}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />

      <button style={btnStyle} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  border: "1px solid #aaa",
  borderRadius: "5px",
  fontSize: "16px",
};

const btnStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  border: "none",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "6px",
  fontSize: "17px",
  cursor: "pointer",
};
