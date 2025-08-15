import React, { memo } from 'react';

const ChildrenComponent = ({ counter, Increament }) => {
    console.log("ChildrenComponent Rendered");
    return (
        <div>
            <h2>Children Text - {counter}</h2>
            <button onClick={Increament}>+</button>
        </div>
    );
};

export default memo(ChildrenComponent);