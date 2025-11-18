import { useState } from "react";
import api from "../axios/AxiosInstance";

const ProductForm = () => {
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    imageUrl: "",
    brand: "",
    description: "",
    price: "",
    stock: "",
  });

  const [error, setError] = useState({});
  const categories = ["shoes", "shirts", "t-shirts", "jeans"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!productData.title) newErrors.title = "Title is required";
    if (!productData.category) newErrors.category = "Category is required";
    if (!productData.imageUrl) newErrors.imageUrl = "Image URL is required";
    if (!productData.brand) newErrors.brand = "Brand is required";
    if (!productData.price) newErrors.price = "Price is required";
    if (!productData.stock && productData.stock !== 0)
      newErrors.stock = "Stock is required";
    if (!productData.description)
      newErrors.description = "Description is required";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      const res = await api.post(
        "http://localhost:3000/api/v1/seller/addProducts",
        productData
      );

      if (res.data.success) {
        alert(res.data.message || "✅ Product added successfully!");
        setProductData({
          title: "",
          category: "",
          imageUrl: "",
          brand: "",
          description: "",
          price: "",
          stock: "",
        });
        setError({});
      } else {
        alert(res.data.message || "Something went wrong");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Server error");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
    setError((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <div
      style={{
        maxWidth: "550px",
        margin: "50px auto",
        padding: "30px 40px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#007bff",
          fontSize: "28px",
          marginBottom: "25px",
          fontWeight: "600",
        }}
      >
          Add New Product
      </h2>

      <form onSubmit={handleSubmit}>
        {[
          { label: "Title", name: "title", type: "text" },
          { label: "Brand", name: "brand", type: "text" },
          { label: "Image URL", name: "imageUrl", type: "text" },
          { label: "Price", name: "price", type: "number" },
          { label: "Stock", name: "stock", type: "number" },
        ].map((field) => (
          <div key={field.name} style={{ marginBottom: "18px" }}>
            <label
              style={{
                fontWeight: "500",
                color: "#333",
                display: "block",
                marginBottom: "6px",
              }}
            >
              {field.label}:
            </label>
            <input
              name={field.name}
              value={productData[field.name]}
              onChange={handleChange}
              type={field.type}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                outline: "none",
                fontSize: "15px",
              }}
            />
            {error[field.name] && (
              <p style={{ color: "red", marginTop: "5px" }}>
                {error[field.name]}
              </p>
            )}
          </div>
        ))}

        {/* Category */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              fontWeight: "500",
              color: "#333",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Category:
          </label>
          <select
            name="category"
            value={productData.category}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "15px",
            }}
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
          {error.category && (
            <p style={{ color: "red", marginTop: "5px" }}>{error.category}</p>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              fontWeight: "500",
              color: "#333",
              display: "block",
              marginBottom: "6px",
            }}
          >
            Description:
          </label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows="3"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "15px",
            }}
          ></textarea>
          {error.description && (
            <p style={{ color: "red", marginTop: "5px" }}>
              {error.description}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
        >
           Submit Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
