import { useEffect, useState } from "react";
import api from "../axios/AxiosInstance";

const ViewProducts = () => {
  const [products, setProducts] = useState([]);
  const [seller, setSeller] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    title: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    stock: "",
  });

  const fetchProducts = async () => {
    try {
      const res = await api.get("/seller/getproducts");
      if (res.data.success) {
        setProducts(res.data.products);
        setSeller(res.data.seller);
      } else {
        setError(res.data.message || "Failed to fetch products");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    try {
      await api.delete(`/seller/deleteproducts/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Error deleting product");
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setForm({
      title: product.title,
      category: product.category,
      brand: product.brand,
      price: product.price,
      description: product.description,
      stock: product.stock,
    });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    if (!form.title || !form.price) {
      alert("Title & Price required");
      return;
    }

    try {
      await api.put(`/seller/editproducts/${editingProduct._id}`, form);

      setProducts((prev) =>
        prev.map((p) => (p._id === editingProduct._id ? { ...p, ...form } : p))
      );

      setShowModal(false);
    } catch (err) {
      alert(err.response?.data?.message || "Error updating product");
    }
  };

  if (loading)
    return (
      <h2 style={{ textAlign: "center", marginTop: "60px", color: "#007bff" }}>
        Loading...
      </h2>
    );

  if (error)
    return (
      <p style={{ textAlign: "center", color: "red", marginTop: "60px" }}>
        {error}
      </p>
    );

  return (
    <div style={{ padding: "25px" }}>
      <h2
        style={{
          textAlign: "center",
          fontWeight: "700",
          marginBottom: "25px",
          color: "#007bff",
        }}
      >
        My Products
      </h2>

      {seller && (
        <div
          style={{
            background: "#e8f4ff",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "25px",
            border: "1px solid #bcdcff",
          }}
        >
          <h4 style={{ marginBottom: "5px", fontWeight: "700" }}>
            Seller Information
          </h4>
          <p style={{ margin: "4px 0" }}>
            <b>Name:</b> {seller.name}
          </p>
          <p style={{ margin: "4px 0" }}>
            <b>Email:</b> {seller.email}
          </p>
        </div>
      )}

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              overflow: "hidden",
              transition: "0.3s",
            }}
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h4 style={{ fontWeight: "700" }}>{product.title}</h4>

              <p>
                <b>Category:</b> {product.category}
              </p>
              <p>
                <b>Brand:</b> {product.brand}
              </p>
              <p>
                <b>Price:</b> ₹{product.price}
              </p>
              <p>
                <b>Stock:</b> {product.stock}
              </p>

              <p style={{ color: "#777", fontSize: "14px" }}>
                {product.description.slice(0, 50)}...
              </p>

              <p style={{ color: "#777", fontSize: "13px" }}>
                Added: {new Date(product.createdAt).toLocaleDateString()}
              </p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "12px",
                }}
              >
                <button
                  onClick={() => handleEditClick(product)}
                  style={{
                    background: "#007bff",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(product._id)}
                  style={{
                    background: "#dc3545",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* INLINE MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "400px",
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
            }}
          >
            <h4 style={{ marginBottom: "15px" }}>Edit Product</h4>

            {/* INPUTS */}
            {["title", "category", "brand", "price", "stock"].map((field) => (
              <div style={{ marginBottom: "10px" }} key={field}>
                <label>{field.toUpperCase()}</label>
                <input
                  value={form[field]}
                  onChange={(e) =>
                    setForm({ ...form, [field]: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    borderRadius: "6px",
                    border: "1px solid #ccc",
                  }}
                />
              </div>
            ))}

            <div style={{ marginBottom: "10px" }}>
              <label>Description</label>
              <textarea
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ccc",
                  height: "70px",
                }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#6c757d",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>

              <button
                onClick={handleSaveEdit}
                style={{
                  padding: "8px 14px",
                  borderRadius: "6px",
                  border: "none",
                  background: "#28a745",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProducts;
