import React, { useCallback } from 'react'
import ChildrenComponent from './ChildrenComponent'

const UseCallback = () => {
    const [counter, setCounter] = React.useState(0);
    const [counter2, setCounter2] = React.useState(2);

    // const Increament = () => {
    //     setCounter(counter + 1);
    // }

    const Increament = useCallback(() => {
        setCounter(counter + 1);
    }, [counter]);

    return (
        <div>
            <h1>Parent Text : {counter}</h1>
            <button onClick={() => setCounter(counter + 1)} >
                Increament Counter
            </button>
            <h1>Parent Text : {counter2}</h1>
            <button onClick={() => setCounter2(counter2 + 1)} >
                Increament Counter2
            </button>
            <ChildrenComponent counter={counter} />
        </div>
    );
};

export default UseCallback;