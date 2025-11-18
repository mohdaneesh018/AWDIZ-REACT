import { useEffect, useState } from "react";
import api from "../axios/AxiosInstance";

const MyCart = () => {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const fetchCart = async () => {
    try {
      setLoading(true);
      const res = await api.get("/carts/getcart");

      if (res.data.success) {
        setItems(res.data.cart);
        setTotalPrice(res.data.totalPrice);
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      setError(err.response?.data?.message || "Error fetching cart.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (productId) => {
    try {
      const res = await api.post("/carts/remove", { productId });

      if (res.data.success) {
        setItems(res.data.cart.items);
        setTotalPrice(res.data.totalPrice);
        setMessage("🗑️ Item removed");
        setTimeout(() => setMessage(""), 1500);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Error removing item.");
    }
  };

  const handlePlaceOrder = async () => {
    try {
      const res = await api.get("/order/placeorder");

      if (res.data.success) {
        setMessage("🎉 Order placed successfully!");
        setItems([]);
        setTotalPrice(0);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  if (loading)
    return (
      <h3 style={{ textAlign: "center", marginTop: "80px", color: "#007bff" }}>
        Loading Cart...
      </h3>
    );

  if (error)
    return (
      <p
        style={{
          textAlign: "center",
          marginTop: "60px",
          color: "red",
          fontWeight: "600",
        }}
      >
        {error}
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "700",
          color: "#007bff",
          fontSize: "30px",
          marginBottom: "25px",
        }}
      >
        My Cart
      </h2>

      {message && (
        <p
          style={{
            textAlign: "center",
            color: "green",
            fontWeight: "600",
            background: "#eaffea",
            width: "60%",
            margin: "0 auto 20px",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {message}
        </p>
      )}

      {items.length === 0 ? (
        <h4
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontWeight: "600",
            color: "gray",
          }}
        >
          Your cart is empty 
        </h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "25px",
          }}
        >
          {/* LEFT: CART ITEMS */}
          <div>
            {items.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  background: "#ffffff",
                  borderRadius: "14px",
                  marginBottom: "20px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.01)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {/* Image */}
                <img
                  src={item.product.imageUrl}
                  alt=""
                  style={{
                    width: "35%",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                {/* PRODUCT DETAILS */}
                <div style={{ padding: "15px", width: "65%" }}>
                  <h4 style={{ fontWeight: "600", color: "#222" }}>
                    {item.product.title}
                  </h4>

                  <p style={{ margin: "6px 0", color: "#666" }}>
                    Quantity: <b>{item.quantity}</b>
                  </p>

                  <p
                    style={{
                      fontWeight: "600",
                      color: "#007bff",
                      fontSize: "17px",
                    }}
                  >
                    ₹{item.product.price} × {item.quantity} ={" "}
                    <span style={{ color: "#28a745" }}>
                      ₹{item.product.price * item.quantity}
                    </span>
                  </p>

                  <button
                    onClick={() => handleRemove(item.product._id)}
                    style={{
                      marginTop: "10px",
                      background: "#ff4d4f",
                      color: "#fff",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "6px",
                      cursor: "pointer",
                      fontWeight: "600",
                      transition: "0.3s",
                    }}
                  >
                     Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: ORDER SUMMARY */}
          <div
            style={{
              background: "#ffffff",
              padding: "20px",
              borderRadius: "14px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              height: "fit-content",
            }}
          >
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                color: "#007bff",
              }}
            >
              Order Summary
            </h3>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#666" }}>Subtotal</span>
              <span style={{ fontWeight: "700" }}>₹{totalPrice}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
              }}
            >
              <span style={{ color: "#666" }}>Delivery</span>
              <span style={{ color: "#28a745", fontWeight: "700" }}>FREE</span>
            </div>

            <hr />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "700",
                marginTop: "10px",
              }}
            >
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>

            <button
              onClick={handlePlaceOrder}
              style={{
                width: "100%",
                marginTop: "25px",
                padding: "12px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                fontSize: "18px",
                fontWeight: "700",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCart;
