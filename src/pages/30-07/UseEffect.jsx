import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [counter1, setCounter1] = useState(1);
    const [counter2, setCounter2] = useState(2);

    useEffect(() => {
        console.log("No Dependencies");
    });

     useEffect(() => {
        console.log("Empty Dependencies");
    }, []);

    useEffect(() => {
        console.log("Single Dependencies");
    }, [counter1]);

    useEffect(() => {
        console.log("Multiple Dependencies");
    }, [counter1, counter2]);
    return (
        <div>
            <h1>{counter1}</h1>
            <button onClick={() => setCounter1(counter1 + 1)} >+</button>
            <h1>{counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)} >+</button>
        </div>
    );
}

export default UseEffect;