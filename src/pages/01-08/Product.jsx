import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = ({ users, setUsers }) => {
  console.log(users, "kuchbhi");
  const { productId } = useParams();
  console.log(productId, "productId");

  useEffect(() => {
    if (productId) {
      //api call
    }
  }, [productId])
  return (
    <div>
      Product - {productId}
      <div>
        {true ? (
          <div>{true ? <h1>Logged in 1</h1> : <h1>Logged in 2</h1>}</div>
        ) : (
          <h1>Please Login.</h1>
        )}
      </div>
    </div>
  );
}

export default Product;