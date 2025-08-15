import React from 'react'

const UseRef = () => {
    const inputRef = React.useRef(1);
    const Increament = () => {
        inputRef.current = inputRef.current + 1;
        console.log(inputRef.current, "inputRef.current");
    };
    console.log("Re-Rendering");
    
    return (
        <div>
            <h1>{inputRef.current}</h1>
            <button onClick={Increament}>+</button>
        </div>
    )
}

export default UseRef
