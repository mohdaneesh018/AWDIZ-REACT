import { useEffect, useState } from "react";
import api from "../axios/AxiosInstance";

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const res = await api.get("/seller/seller-orders");

      if (res.data.success) {
        setOrders(res.data.orders);
      } else {
        setError(res.data.message || "Failed to load orders.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading)
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h3> Loading orders...</h3>
      </div>
    );

  if (error)
    return (
      <div style={{ textAlign: "center", color: "red", marginTop: "50px" }}>
        <h3>{error}</h3>
      </div>
    );

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#007bff",
          fontWeight: "600",
          fontSize: "28px",
          marginBottom: "30px",
        }}
      >
         Seller Orders
      </h2>

      {orders.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontWeight: "500",
            color: "gray",
            marginTop: "40px",
          }}
        >
          No orders found for your products 
        </p>
      ) : (
        <>
          {orders.map((order) => (
            <div
              key={order._id}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                marginBottom: "25px",
                padding: "20px",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              {/* Order Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: "10px",
                }}
              >
                <h5 style={{ color: "#333", fontWeight: "600" }}>
                  Order ID:{" "}
                  <span style={{ color: "#007bff" }}>{order._id}</span>
                </h5>
                <p
                  style={{
                    color: "gray",
                    fontSize: "14px",
                    marginTop: "5px",
                  }}
                >
                  Buyer ID: {order.user}
                </p>
              </div>

              <hr style={{ border: "0.5px solid #e0e0e0", marginBottom: "15px" }} />

              {/* Products */}
              {order.products.map((item) => (
                <div
                  key={item._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    borderBottom: "1px solid #f0f0f0",
                    padding: "15px 0",
                  }}
                >
                  {/* Product Image */}
                  <div
                    style={{
                      flex: "1",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.title}
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "10px",
                        objectFit: "cover",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div
                    style={{
                      flex: "3",
                      paddingLeft: "20px",
                      minWidth: "250px",
                    }}
                  >
                    <h4
                      style={{
                        marginBottom: "8px",
                        fontWeight: "600",
                        color: "#222",
                      }}
                    >
                      {item.product.title}
                    </h4>
                    <p style={{ margin: "5px 0", color: "#555" }}>
                      <b>Quantity:</b> {item.quantity}
                    </p>
                    <p style={{ margin: "5px 0", color: "#555" }}>
                      <b>Price:</b> ₹{item.product.price}
                    </p>
                    <p
                      style={{
                        margin: "8px 0 0",
                        color: "#111",
                        fontWeight: "600",
                      }}
                    >
                      Subtotal: ₹{item.quantity * item.product.price}
                    </p>
                  </div>
                </div>
              ))}

              {/* Total */}
              <div
                style={{
                  textAlign: "right",
                  marginTop: "15px",
                }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    color: "#007bff",
                    fontSize: "20px",
                  }}
                >
                  Total: ₹{order.totalPrice}
                </h4>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SellerOrders;
