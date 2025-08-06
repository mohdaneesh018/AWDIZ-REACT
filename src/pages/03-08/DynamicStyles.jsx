import React, { Children, useState } from 'react'
import './DynamicStyles.css'; // Assuming you have a CSS file for styles

const DynamicStyles = () => {

    const [toggleclass, setToggleClass] = useState(false);

    const buttonStyles = toggleclass ? "active-btn" : "inactice-btn";

    const handleClick = () => {
        setToggleClass(!toggleclass);
    }

    return (
        <div>
            <button className={buttonStyles} onClick={handleClick}>
                {toggleclass ? "Active" : "Inactive"}
            </button>
            {toggleclass && "True"}
            <Button>Click here.</Button>
        </div>
    )
}

    const Button = ({ children }) => {
        return <button>{children} + </button>
    }

export default DynamicStyles
