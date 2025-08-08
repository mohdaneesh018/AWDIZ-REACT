import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const imageStyles = {
    width: "300px",
    height: "300px",
    objectFit: "contain",
    marginBottom: "10px"
  };

  const cardStyles = {
    border: "1px solid black",
    padding: "15px",
    margin: "15px",
    width: "320px",
    textAlign: "center",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px"
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res) {
          setData(res.data);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
        backgroundColor: "#f5f5f5"
      }}
    >
      {data.map((item) => (
        <div key={item.id} style={cardStyles}>
          <img style={imageStyles} src={item.image} alt={item.title} />
          <p style={{ fontWeight: "bold", marginBottom: "10px" }}>{item.title}</p>
          <p style={{ color: "green", fontSize: "18px" }}>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default FetchData;
