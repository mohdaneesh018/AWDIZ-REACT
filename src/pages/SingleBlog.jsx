import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const loadBlog = async () => {
    const res = await axios.get(`http://localhost:3000/blog/${id}`);
    setBlog(res.data.blog);
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const addComment = async () => {
    await axios.post(`http://localhost:3000/blog/${id}/comment`, {
      user,
      comment,
    });
    loadBlog();
    setUser("");
    setComment("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", marginTop: "40px" }}>
      {blog && (
        <>
          <h2>{blog.title}</h2>
          <p style={{ color: "black", fontWeight: "bold" }}>By {blog.author}</p>
          <p
            style={{
              marginTop: "20px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "10px",
              background: "red",
              color: "White",
            }}
          >
            {blog.text}
          </p>

          <h3 style={{ marginTop: "30px", color: "green"}}>Comments</h3>

          {blog.comments.map((c) => (
            <div
              key={c._id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                borderRadius: "10px",
                marginBottom: "10px",
                background: "#f3f3f3",
                textAlign: "left",
              }}
            >
              <strong>{c.user}</strong>
              <p>{c.comment}</p>
            </div>
          ))}

          <div
            style={{
              marginTop: "20px",
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              background: "gray",
              color: "Black",
            }}
          >
            <h4>Add Comment</h4>

            <input
              placeholder="Your Name"
              value={user}
              style={commentInput}
              onChange={(e) => setUser(e.target.value)}
            />

            <input
              placeholder="Comment"
              value={comment}
              style={commentInput}
              onChange={(e) => setComment(e.target.value)}
            />

            <button style={commentBtn} onClick={addComment}>
              Post Comment
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const commentInput = {
  width: "60%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "6px",
  border: "1px solid #aaa", 
};

const commentBtn = {
  width: "50%",
  marginTop: "10px",
  padding: "12px",
  background: "darkblue",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
