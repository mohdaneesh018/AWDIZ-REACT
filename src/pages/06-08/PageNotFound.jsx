import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {

    const [counter, setCounter] = useState(5);
    const router = useNavigate();

    useEffect(() => {
        if (counter === 0) {
            router("/");
            return;
        }

        const timeout = setTimeout(() => {
            setCounter((prev) => prev - 1);
            // console.log("Counter:", counter);  
        }, 1000);

        return () => clearTimeout(timeout);  
    }, [counter]);

    return (
        <div>
            <h1 style={ {color: "red"} }>Page Not Found</h1>
            <p style={ {fontWeight: "bold", color: "black"} }>Redirecting to HomePage in..... {counter} seconds</p>
        </div>
    )
}

export default PageNotFound