import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../axios/AxiosInstance";
import { logout } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await api.get("/auth/logout");

      if (res.data.success) {
        dispatch(logout());
        alert("Logout successful");
        navigate("/");
      } else {
        alert(res.data.message);
      }
    } catch (error) {
      console.error("Logout Error:", error);
      alert("Something went wrong during logout.");
    }
  };

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>

      {!user ? (
        <>
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")}>Register</button>
        </>
      ) : (
        <>
          <button onClick={handleLogout}>Logout</button>

          {user?.role === "user" && (
            <button onClick={() => navigate("/viewallproducts")}>
              View Products
            </button>
          )}
          {user?.role === "user" && (
            <button onClick={() => navigate("/mycart")}>My Cart</button>
          )}
          {user?.role === "user" && (
            <button onClick={() => navigate("/orders")}>My Orders</button>
          )}
          {user?.role === "admin" && (
            <button onClick={() => navigate("/admin")}>Admin Panel</button>
          )}
          {user?.role === "seller" && (
            <button onClick={() => navigate("/addproduct")}>Add Product</button>
          )}
          {user?.role === "seller" && (
            <button onClick={() => navigate("/viewproducts")}>
              View Products
            </button>
          )}
          {user?.role === "seller" && (
            <button onClick={() => navigate("/sellerorders")}>Orders</button>
          )}
        </>
      )}
    </>
  );
};

export default Navbar;

{
  /* <button onClick={() => router("/use-state")}>UseState</button>
<button onClick={() => router("/use-effect")}>UseEffect</button>
<button onClick={() => router("/use-params")}>UseParams</button>
<button onClick={() => router("/use-memo")}>useMemo</button>
<button onClick={() => router("/memo-method")}>Memo</button>
<button onClick={() => router("/fetchproducts")}>Fetch Products</button>
<button onClick={() => router("/mycart")}>My Cart</button>
<button onClick={() => router("/use-callback")}>UseCallback</button>
<button onClick={() => router("/use-reducer")}>UseReducer</button>
<button onClick={() => router("/use-ref")}>UseRef</button>
<button onClick={() => router("/theme")}>UseContext</button> */
}
