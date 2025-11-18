import { useState } from "react";
import ConfirmModal from "./Deletemodal";

const Addfruits = () => {
  const [fruits, setFruits] = useState([]);
  const [newfruit, setNewFruit] = useState("");
  const [editId, setEditId] = useState(null);
  const [popup, setPopup] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const addFruit = () => {
    if (newfruit.trim() === "") {
      alert("Please enter a fruit name");
      return;
    }

    const newFruitObj = {
      id: Date.now(),
      fruit: newfruit.trim(),
    };

    setFruits([...fruits, newFruitObj]);
    setNewFruit("");
  };

  const handleEdit = (fruit) => {
    setNewFruit(fruit.fruit);
    setEditId(fruit.id);
  };

  const updateFruit = () => {
    if (newfruit.trim() === "") {
      alert("Please enter a fruit name");
      return;
    }

    const updatedList = fruits.map((item) =>
      item.id === editId ? { ...item, fruit: newfruit.trim() } : item
    );

    setFruits(updatedList);
    setNewFruit("");
    setEditId(null);
  };

  const handleDelete = () => {
    const updatedFruits = fruits.filter((fruit) => fruit.id !== deleteId);
    setFruits(updatedFruits);
    setDeleteId(null);
    setPopup(false);
  };

  const handleDeletecancel = () => {
    setDeleteId(null);
  };

  return (
    <>
      {popup && (
        <ConfirmModal
          handleDelete={handleDelete}
          handleDeletecancel={handleDeletecancel}
          setPopup={setPopup}
        />
      )}

      <h1
        style={{ textAlign: "center", color: "#2e7d32", marginBottom: "20px" }}
      >
        Fruit List
      </h1>

      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <input
          type="text"
          value={newfruit}
          onChange={(e) => setNewFruit(e.target.value)}
          placeholder="Enter fruit name"
          style={{
            padding: "10px",
            width: "250px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
            outline: "none",
          }}
        />

        {editId ? (
          <>
            <button
              onClick={updateFruit}
              style={{
                padding: "10px 15px",
                backgroundColor: "#1976d2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                setEditId(null);
                setNewFruit("");
              }}
              style={{
                padding: "10px 15px",
                marginLeft: "10px",
                backgroundColor: "#9e9e9e",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={addFruit}
            style={{
              padding: "10px 15px",
              backgroundColor: "#388e3c",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        )}
      </div>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          padding: "20px",
          backgroundColor: "#f1f8e9",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {fruits.length === 0 ? (
          <p style={{ textAlign: "center", color: "#777" }}>
            No fruits added yet
          </p>
        ) : (
          <ul style={{ paddingLeft: 0 }}>
            {fruits.map((fruit, index) => (
              <li
                key={fruit.id}
                style={{
                  listStyleType: "none",
                  padding: "12px 16px",
                  marginBottom: "10px",
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                }}
              >
                <span>
                  {index + 1}. {fruit.fruit}
                </span>
                <div>
                  <button
                    onClick={() => handleEdit(fruit)}
                    style={{
                      padding: "6px 10px",
                      marginRight: "10px",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setPopup(true);
                      setDeleteId(fruit.id);
                    }}
                    style={{
                      padding: "6px 10px",
                      backgroundColor: "#f44336",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Addfruits;
