import React from 'react'

const Login = () => {
    const [userData, setUserData] = React.useState({})

    const [handlePassword, setHandlePassword] = React.useState(false);
    const ShowPassword = () => {
        setHandlePassword(!handlePassword);
    }

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (userData.email && userData.password) {
                // api call
                alert("Login successful!");
                setUserData({
                    email: "",
                    password: ""
                });
            } else {
                alert("Please fill all fields correctly.");
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <h1>Sign In</h1>
            <h2>Email : {userData.email} Password : {userData.password}</h2>
            <form>
                <label>Email</label>
                <br />
                <input
                    type="email"
                    name="email"
                    value={userData.email || ""}
                    onChange={handleChange}
                /><br />
                <label>Password</label>
                <br />
                <input
                    type={
                        handlePassword ? "text" : "password"
                    } name="password"
                    value={userData.password || ""}
                    onChange={handleChange} 
                />
                <button
                    type='button'
                    onClick={ShowPassword}>show</button>
                <br />
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    );
}

export default Login;
