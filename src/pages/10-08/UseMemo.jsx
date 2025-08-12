import React, { use, useMemo, useState } from 'react'

const UseMemo = () => {
    const [counter, setCounter] = React.useState(1);
    const [counter2, setCounter2] = useState(2);
    console.log("Rerendering UseMemo Component");
    // const result = heavyCalculation(counter);
    const result = useMemo(() => heavyCalculation(counter), [counter]);

    return (
        <div>
            <h1>result : {result}</h1>
            <h1>Counter : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)} >
                Increament1
            </button>
            <h1>Counter2 : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)} >
                Increament2
            </button>
        </div>
    )
}

const heavyCalculation = (num) => {
    console.log("Calculating having Calculation");
    let output = 0;
    for (let i = 0; i < 1000000000; i++) {
        output += i;
    }
    return output + num;
}

export default UseMemo