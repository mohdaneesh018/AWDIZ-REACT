import axios from "axios";
import { useEffect, useState } from "react";

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                if (res) {
                    setData(res.data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
    );
};

export default FetchData;
