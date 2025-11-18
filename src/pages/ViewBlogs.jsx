import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/blog").then((res) => {
      setBlogs(res.data.blogs);
    });
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "auto", marginTop: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>All Blogs</h2>

      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{
            border: "1px solid #ddd",
            background: "black",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "15px",
            boxShadow: "0px 0px 8px rgba(0,0,0,0.08)",
            textAlign: "left",
          }}
        >
          <h3>{blog.title}</h3>
          <p style={{ color: "blue" }}>By: {blog.author}</p>
          <p>{blog.text.slice(0, 120)}...</p>

          <Link
            to={`/blog/${blog._id}`}
            style={{
              padding: "8px 12px",
              background: "#007bff",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
            }}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
