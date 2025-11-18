import { useEffect, useState } from "react";
import api from "../axios/AxiosInstance";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await api.get("/order/myorders");

      if (res.data.success) {
        setOrders(res.data.orders);
      } else {
        setError(res.data.message || "Failed to load orders.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error loading orders.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading)
    return (
      <h3
        style={{
          textAlign: "center",
          marginTop: "80px",
          color: "#007bff",
          fontFamily: "Poppins",
        }}
      >
        Loading your orders...
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
          fontFamily: "Poppins",
        }}
      >
        {error}
      </p>
    );

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "25px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: "30px",
          marginBottom: "35px",
          color: "#007bff",
        }}
      >
        My Orders
      </h2>

      {orders.length === 0 ? (
        <h4
          style={{
            textAlign: "center",
            marginTop: "60px",
            fontWeight: "600",
            color: "gray",
          }}
        >
          No orders found.
        </h4>
      ) : (
        <>
          {orders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "#fff",
                borderRadius: "14px",
                padding: "20px",
                marginBottom: "30px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.01)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {/* ORDER HEADER */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  marginBottom: "15px",
                }}
              >
                <h4 style={{ fontWeight: "700", color: "#333" }}>
                  Order ID:{" "}
                  <span style={{ color: "#007bff" }}>{order._id}</span>
                </h4>

                <p style={{ color: "#777" }}>
                  Ordered on:{" "}
                  <b style={{ color: "#333" }}>
                    {new Date(order.createdAt).toLocaleString()}
                  </b>
                </p>
              </div>

              <hr />

              {/* ORDER ITEMS */}
              {order.products.map((item) => (
                <div
                  key={item._id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: "15px",
                    padding: "15px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {/* Image */}
                  <div>
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>

                  {/* Item details */}
                  <div>
                    <h5 style={{ fontWeight: "700", marginBottom: "8px" }}>
                      {item.product.title}
                    </h5>

                    <p style={{ marginBottom: "4px", color: "#555" }}>
                      <b>Quantity: </b> {item.quantity}
                    </p>

                    <p style={{ marginBottom: "4px", color: "#555" }}>
                      <b>Price: </b> ₹{item.product.price}
                    </p>

                    <p
                      style={{
                        fontWeight: "700",
                        marginTop: "10px",
                        color: "#007bff",
                      }}
                    >
                      Subtotal: ₹{item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}

              {/* TOTAL PRICE */}
              <h4
                style={{
                  textAlign: "right",
                  marginTop: "20px",
                  fontWeight: "700",
                  color: "#28a745",
                }}
              >
                Total: ₹{order.totalPrice.toFixed(2)}
              </h4>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MyOrders;
