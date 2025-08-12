import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const spinnerStyle = {
  border: "3px solid #ccc", // Light gray border
  borderTop: "3px solid #333", // Darker border on top for spinning effect
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  animation: "spin 1s linear infinite",
  margin: "50px auto", // Center horizontally with margin top-bottom
};

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res) {
          setData(res.data);
        }
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <>
        {/* Spinner keyframes styles */}
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>

        <div style={spinnerStyle}></div>
      </>
    );
  }

  return (
    <>
      <h1>Fetch Products</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {data.map((product) => (
          <div
            onClick={() => router(`/productInfo/${product.id}`)}
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              width: "220px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <img
              src={product.image}
              height={200}
              width={200}
              alt={product.title}
            />
            <p style={{ fontWeight: "bold" }}>{product.title}</p>
            <p>Price: ${product.price}/-</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;