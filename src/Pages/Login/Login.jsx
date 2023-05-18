import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { logIn, googleSignIn } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            // navigate(from ,{replace: true})
        })
        .catch(error=>{
            console.error(error);
        })
    }
    return (
        <div className="p-5 bg-slate-300 border border-2">
            <form onSubmit={handleLogin} className="grid grid-cols-1 ">
                <input className="w-1/2 mb-3 p-2 mx-auto" type="email" name="email" placeholder="Email" required />
                <input className="w-1/2 mb-3 p-2 mx-auto" type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Login" />
                <Link to="/register"> Register</Link>
            </form>
        </div>
    );
};

export default Login;