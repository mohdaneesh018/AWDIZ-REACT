// import { useDispatch, useSelector } from "react-redux";
// // import {
// //   clearCart,
// //   decreaseQuantity,
// //   increaseQuantity,
// //   removeFromCart,
// // } from "../redux/slices/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.items);

//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Shopping Cart</h2>

//       {cart.length === 0 ? (
//         <p>Cart is empty</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 border: "1px solid gray",
//                 padding: "10px",
//                 marginBottom: "10px",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <span>
//                 {item.name} - ₹{item.price} * {item.quantity}
//               </span>
//               <div>
//                 <button onClick={() => dispatch(increaseQuantity(item.id))}>
//                   +
//                 </button>
//                 <button onClick={() => dispatch(decreaseQuantity(item.id))}>
//                   -
//                 </button>
//                 <button onClick={() => dispatch(removeFromCart(item.id))}>
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))}

//           <h3>Total: ₹{totalPrice}</h3>
//           <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
