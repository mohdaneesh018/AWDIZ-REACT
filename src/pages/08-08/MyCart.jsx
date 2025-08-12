import { useEffect, useState } from "react";

const Mycart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const carts = JSON.parse(localStorage.getItem("carts")) || [];
    setData(carts);
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>My Cart</h1>

      {data.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "1.2rem" }}>
          Empty Cart
        </div>
      ) : (
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {data.map((cart) => (
            <div
              key={cart.id}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                border: "1px solid #ddd",
                marginBottom: "10px",
              }}
            >
              {/* Small Image */}
              {cart.image && (
                <img
                  src={cart.image}
                  alt={cart.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "contain",
                    borderRadius: "4px",
                    marginRight: "15px",
                  }}
                />
              )}
              {/* Details */}
              <div style={{ flex: 1, textAlign: "left" }}>
                <h3
                  style={{
                    margin: "0 0 5px 0",
                    fontSize: "1rem",
                  }}
                >
                  {cart.title}
                </h3>

                {cart.description && (
                  <p
                    style={{
                      fontSize: "0.85rem",
                      margin: 0,
                      maxWidth: "500px",
                    }}
                  >
                    {cart.description}
                  </p>
                )}
                {cart.price && (
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "1rem",
                      marginTop: "5px",
                    }}
                  >
                    ${cart.price}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Mycart;