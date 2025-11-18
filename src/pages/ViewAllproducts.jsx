import { useEffect, useState } from "react";
import api from "../axios/AxiosInstance";

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [cartMessage, setCartMessage] = useState("");
  const [quantities, setQuantities] = useState({});

  const categories = ["shoes", "shirts", "t-shirts", "jeans"];

  const fetchProducts = async () => {
    try {
      setLoading(true);

      let query = "";
      if (selectedCategories.length > 0) {
        query = `?category=${selectedCategories.join(",")}`;
      }

      const res = await api.get(`/products/getallfilterproducts${query}`);

      if (res.data.success) {
        const list = res.data.products;
        setProducts(list);

        setQuantities((prev) => {
          const updated = { ...prev };
          list.forEach((p) => {
            if (!updated[p._id]) updated[p._id] = 1;
          });
          return updated;
        });
      } else {
        setError(res.data.message || "Failed to fetch products");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleQtyChange = (productId, qty) => {
    qty = Number(qty);
    if (qty < 1 || qty > 10) return;

    setQuantities((prev) => ({
      ...prev,
      [productId]: qty,
    }));
  };

  const handleAddToCart = async (productId) => {
    const quantity = quantities[productId] || 1;

    try {
      const res = await api.post("/carts/add", { productId, quantity });

      if (res.data.success) {
        setCartMessage(`🛒 Added ${quantity} item(s) to cart`);
        setTimeout(() => setCartMessage(""), 2500);
      }
    } catch (error) {
      if (error.response?.status === 401) {
        alert("Please log in to add items to your cart.");
      } else {
        alert(error.response?.data?.message || "Error adding to cart");
      }
    }
  };

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <h3 style={{ color: "#007bff" }}>⏳ Loading Products...</h3>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", marginTop: "60px", color: "red" }}>
        <h4>⚠️ {error}</h4>
      </div>
    );

  return (
    <div
      style={{
        maxWidth: "1250px",
        margin: "0 auto",
        padding: "40px 20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Title */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#007bff",
          marginBottom: "25px",
        }}
      >
        All Products
      </h2>

      {/* Filter Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "15px",
          marginBottom: "35px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            style={{
              border: "none",
              padding: "10px 18px",
              borderRadius: "20px",
              background: selectedCategories.includes(category)
                ? "#007bff"
                : "#e8f0fe",
              color: selectedCategories.includes(category)
                ? "white"
                : "#333",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: selectedCategories.includes(category)
                ? "0 3px 8px rgba(0, 123, 255, 0.4)"
                : "0 2px 5px rgba(0,0,0,0.1)",
              transition: "all 0.3s ease",
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Success Message */}
      {cartMessage && (
        <div
          style={{
            textAlign: "center",
            fontWeight: "600",
            color: "green",
            background: "#eaffea",
            padding: "10px",
            borderRadius: "8px",
            width: "60%",
            margin: "10px auto 20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {cartMessage}
        </div>
      )}

      {/* Product Grid */}
      {products.length === 0 ? (
        <p style={{ textAlign: "center", color: "gray", fontWeight: "500" }}>
          No products found 
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                overflow: "hidden",
                transition: "transform 0.2s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 6px 18px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src={product.imageUrl}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h4
                  style={{
                    fontWeight: "600",
                    color: "#222",
                    marginBottom: "8px",
                  }}
                >
                  {product.title}
                </h4>

                <p style={{ color: "#555", fontSize: "14px", margin: "4px 0" }}>
                  <b>Brand:</b> {product.brand}
                </p>
                <p style={{ color: "#555", fontSize: "14px", margin: "4px 0" }}>
                  <b>Category:</b> {product.category}
                </p>

                <p
                  style={{
                    color: "#007bff",
                    fontWeight: "600",
                    margin: "6px 0",
                    fontSize: "16px",
                  }}
                >
                  ₹{product.price}
                </p>

                <p style={{ color: "#666", fontSize: "13px", marginBottom: "10px" }}>
                  {product.description.slice(0, 60)}...
                </p>

                {/* Quantity & Add to Cart */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <select
                    value={quantities[product._id] || 1}
                    onChange={(e) =>
                      handleQtyChange(product._id, e.target.value)
                    }
                    style={{
                      borderRadius: "6px",
                      padding: "6px",
                      border: "1px solid #ccc",
                      outline: "none",
                    }}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => handleAddToCart(product._id)}
                    style={{
                      flex: "1",
                      background: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      padding: "8px 12px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "0.3s ease",
                    }}
                    onMouseOver={(e) => (e.target.style.background = "#0056b3")}
                    onMouseOut={(e) => (e.target.style.background = "#007bff")}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewAllProducts;
