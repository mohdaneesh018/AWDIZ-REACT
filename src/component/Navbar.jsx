import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const router = useNavigate();
    function redirecttoLogin() {
        router("/login");
    }
    return (
        <div>
            <button onClick={() => router("/")}>Home</button>
            <button onClick = {() => router("/register")} >Register</button>
            <button onClick = {redirecttoLogin} >Login</button>
            <button onClick={() => router("/use-state")}>UseState</button>
            <button onClick={() => router("/use-effect")}>UseEffect</button>
        </div>
    );
}

export default Navbar;