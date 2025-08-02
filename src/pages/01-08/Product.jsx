import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const { productId } = useParams()
  console.log(productId, "productId")
  useEffect(() => {
    if (productId) {
      //api call
    }
  }, [productId])
  return (
    <div>Product- {productId}</div>
  )
}

export default Product
