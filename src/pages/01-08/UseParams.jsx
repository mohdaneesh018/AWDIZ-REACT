import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UseParams = () => {
    const router = useNavigate();
    const [tshirt, setTshirt] = useState([
        { id: 1, name: "T-shirt 1", price: 100, image: "https://assets.ajio.com/medias/sys_master/root/20240813/9ths/66bac18f1d763220fa744b48/-473Wx593H-700263214-black-MODEL.jpg" },
        { id: 2, name: "T-shirt 2", price: 200, image: "https://assets.ajio.com/medias/sys_master/root/20240813/9ths/66bac18f1d763220fa744b48/-473Wx593H-700263214-black-MODEL.jpg" },
        { id: 3, name: "T-shirt 3", price: 300, image: "https://assets.ajio.com/medias/sys_master/root/20240813/9ths/66bac18f1d763220fa744b48/-473Wx593H-700263214-black-MODEL.jpg" },
        { id: 4, name: "T-shirt 4", price: 400, image: "https://assets.ajio.com/medias/sys_master/root/20240813/9ths/66bac18f1d763220fa744b48/-473Wx593H-700263214-black-MODEL.jpg" },
        { id: 5, name: "T-shirt 5", price: 500, image: "https://assets.ajio.com/medias/sys_master/root/20240813/9ths/66bac18f1d763220fa744b48/-473Wx593H-700263214-black-MODEL.jpg" }
    ]);
    return (
        <div style={{ display: "flex", justifyContent: "space-around", }}>
            {tshirt.map((product) => (
                <div
                    key = {product.id}
                    onClick={() => router(`/product/${product.id}`)}
                    style={{ border: "1px solid black", cursor: "pointer" }}
                >
                    <img
                        style={{ width: "140px", height: "170px" }}
                        src={product.image}
                    />
                    <h3>Name: {product.name}</h3>
                    <h3>Price: {product.price}/-</h3>
                </div>
            ))}
        </div>
    );
}

export default UseParams;
