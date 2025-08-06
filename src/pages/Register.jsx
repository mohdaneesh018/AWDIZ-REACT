import React, { useState } from 'react'

// const Register = () => {
//     const [name, setName] = React.useState("");
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const [confirmPassword, setConfirmPassword] = React.useState("");


//     return (
//         <div>
//             <h1>Sign Up</h1>
//             <form>
//                 <label>Name</label><br />
//                 <input type="text" placeholder='Enter your name' /><br />
//                 <label>Email</label><br />
//                 <input type="email" placeholder='Enter your email' /><br />
//                 <label>Password</label><br />
//                 <input type="password"placeholder='Enter your password' /><br />
//                 <label>Confirm Password</label><br />
//                 <input type="password" placeholder='Confirm your password' /><br />
//                 <input type="submit">Submit</input>
//             </form>        
//         </div>
//     )
// }


const Register = () => {
    const [userData, setUserData] = React.useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [handlePassword, setHandlePassword] = useState(false);
    const ShowPassword = () => {
        setHandlePassword(!handlePassword);

        // setTimeout( () => {
        //     setHandlePassword(false);
        // }, 5000);
    }

    //     const [error, setError] = useState({});
    //   const [passhandle, setPasshandle] = useState({
    //     password: false,
    //     cpassword: false,
    //   });


    const handleChange = (event) => {
        console.log(event.target.name, event.target.value);
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (
                userData.name &&
                userData.email &&
                userData.password &&
                userData.confirmPassword
            ) {
                // api call
                alert("Form submitted successfully!");
                setUserData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });
            }
            else {
                alert("Please fill all fields correctly.");
            }
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <div>
            <h1>Sign Up</h1>
            <h2>Name : {userData.name} Email : {userData.email} password : {userData.password} confirmPassword : {userData.confirmPassword}</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input type="text" name="name" value={userData.name} onChange={handleChange} />
                <br />
                <label>Email</label>
                <br />
                <input type="email" name="email" value={userData.email} onChange={handleChange} />
                <br />
                <label>Password</label>
                <br />
                <input type={
                    handlePassword ? "text" : "password"
                } name="password" value={userData.password} onChange={handleChange} />
                <button
                    type='button'
                    onClick={ShowPassword}
                >Show</button>

                {/* onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  password: !prev.password,
                }))
              }
            >
              {passhandle.password ? "Hide" : "Show"}
             */}
                <br />
                <label>Confirm Password</label>
                <br />
                <input type={
                    handlePassword ? "text" : "password"
                } name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
                <button onClick={ShowPassword} type='button'>Show</button>

                {/* onClick={() =>
                setPasshandle((prev) => ({
                  ...prev,
                  cpassword: !prev.cpassword,
                }))
              }
            >
              {passhandle.cpassword ? "Hide" : "Show"} */}

                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Register;