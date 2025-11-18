const ConfirmModal = ({ handleDelete, setPopup, handleDeletecancel }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          minWidth: "300px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h3 style={{ marginBottom: "16px", color: "#d32f2f" }}>
          Are you sure you want to delete this item?
        </h3>
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              handleDelete();
              setPopup(false);
            }}
            style={{
              backgroundColor: "#d32f2f",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              marginRight: "10px",
              cursor: "pointer",
            }}
          >
            Yes, Delete
          </button>
          <button
            onClick={() => {
              handleDeletecancel();
              setPopup(false);
            }}
            style={{
              backgroundColor: "#9e9e9e",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
