import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Useparams = () => {
  const router = useNavigate();
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Tshirt1",
      price: "500",
      image:
        "https://image.hm.com/assets/hm/02/50/0250fe15a5aab2edc3ec9eb5229d5d199469fb6c.jpg?imwidth=1260",
    },
    {
      id: 2,
      name: "Tshirt2",
      price: "500",
      image:
        "https://image.hm.com/assets/hm/02/50/0250fe15a5aab2edc3ec9eb5229d5d199469fb6c.jpg?imwidth=1260",
    },
    {
      id: 3,
      name: "Tshirt3",
      price: "500",
      image:
        "https://image.hm.com/assets/hm/02/50/0250fe15a5aab2edc3ec9eb5229d5d199469fb6c.jpg?imwidth=1260",
    },
    {
      id: 4,
      name: "Tshirt4",
      price: "500",
      image:
        "https://image.hm.com/assets/hm/02/50/0250fe15a5aab2edc3ec9eb5229d5d199469fb6c.jpg?imwidth=1260",
    },
    {
      id: 5,
      name: "Tshirt5",
      price: "500",
      image:
        "https://image.hm.com/assets/hm/02/50/0250fe15a5aab2edc3ec9eb5229d5d199469fb6c.jpg?imwidth=1260",
    },
  ]);
  return (
    <>
      <h1>UseParams</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {products.map((product) => (
          <div
            onClick={() => router(`/products/${product.id}`)}
            key={product.id}
            style={{
              border: "1px solid black",
              margin: "3px",
              cursor: "pointer",
            }}
          >
            <img src={product.image} height={200} width={200} alt="" />
            <h2>{product.name}</h2>
            <h3>Price : {product.price}/-</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Useparams;
