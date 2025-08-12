import React, { memo } from 'react';

const ChildrenComponent = ({ counter }) => {
    console.log("ChildrenComponent Rendered");
    return <div>Children Text - {counter}</div>
}

export default memo(ChildrenComponent);