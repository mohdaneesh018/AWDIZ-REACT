// import { useDispatch } from "react-redux";
// import { addToCart } from "../redux/slices/cartSlice";
// import Cart from "./Cart";

// const ProductList = () => {
//   const dispatch = useDispatch();

//   const products = [
//     { id: 1, name: "Laptop", price: 50000 },
//     { id: 2, name: "Phone", price: 20000 },
//     { id: 3, name: "Headphones", price: 3000 },
//     { id: 4, name: "Keyboard", price: 1500 },
//   ];

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Products - Add to Cart (Redux)</h2>

//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: "1px solid gray",
//             padding: "10px",
//             marginBottom: "10px",
//             display: "flex",
//             justifyContent: "space-between",
//           }}
//         >
//           <span>
//             {product.name} - ₹{product.price}
//           </span>
//           <button onClick={() => dispatch(addToCart(product))}>
//             Add to Cart
//           </button>
//         </div>
//       ))}

//       <Cart />
//     </div>
//   );
// };

// export default ProductList;
