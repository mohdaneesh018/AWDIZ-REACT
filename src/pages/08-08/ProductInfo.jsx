import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductInfo = () => {
    const { productId } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getallProductInfo = async () => {
        try {
            const res = await axios.get(
                `https://fakestoreapi.com/products/${productId}`
            );
            setData(res.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const handleCart = () => {
        const existingData = JSON.parse(localStorage.getItem("carts")) || [];

        if (existingData.find((cart) => cart.id === data.id)) {
            alert("Item Already Exist in Cart");
        } else {
            const cardData = {
                id: data.id,
                title: data.title,
                description: data.description,
                price: data.price,
                image: data.image,
            };
            const updatedData = [...existingData, cardData];

            localStorage.setItem("carts", JSON.stringify(updatedData));
            alert("Produt Added successfully");
        }
    };

    useEffect(() => {
        if (productId) {
            getallProductInfo();
        }
    }, [productId]);
    return (
        <>
            {loading ? (
                <div>Loading.....</div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-around",
                        marginTop: "30px",
                    }}
                >
                    <div style={{ height: "500px", width: "45%" }}>
                        <img height="90%" width="70%" src={data.image} alt="" />
                    </div>
                    <div style={{ width: "45%", textAlign: "left" }}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <p style={{ fontWeight: "bolder" }}>{data.category}</p>
                        <h4>${data.price}</h4>
                        <button
                            onClick={handleCart}
                            style={{
                                padding: "10px",
                                backgroundColor: "lightblue",
                                outline: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductInfo;