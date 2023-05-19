import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';

const Login = () => {

    const [error, setError] = useState('')
    const { logIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

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
            setError('')
            navigate(from ,{replace: true})
        })
        .catch(error=>{
            setError(error.message);
        })
    }

        const handleGooleLogIn = ()=>{
            googleSignIn()
            .then(result =>{
                const user = result.user;
                console.log(user);
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
            <div>
                <FaGoogle></FaGoogle>
                <button onClick={handleGooleLogIn}> Google Log in</button>
            </div>
            <p>{error}</p>
        </div>
    );
};

export default Login;