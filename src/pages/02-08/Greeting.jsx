import React from 'react'

const Greeting = ({ name, isLoggedIn }) => {
    const [bgcolor, setBgcolor] = React.useState("lightblue");
    const changeStyle = () => {
        setBgcolor(bgcolor === "lightblue" ? "lightgreen" : "lightblue");
    };
    const styles = {
        cursor: "pointer",
        backgroundColor: bgcolor,
    };
    if (isLoggedIn) {
        return <div>Hello {name}, Welcome to our website!</div>
    } else {
        return (
            <div style={styles} onClick={changeStyle}>
                Please log in to continue.
            </div>
        ); 
    }
};

export default Greeting;