import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const router = useNavigate();
    function redirecttoLogin() {
        router("/login");
    }
    return (
        <div>
            <button onClick = {() => router("/register")} >Register</button>
            <button onClick = {redirecttoLogin} >Login</button>
        </div>
    );
}

export default Navbar;