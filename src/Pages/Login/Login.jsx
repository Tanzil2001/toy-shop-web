import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from "react-helmet";

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
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                setError('')
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleGooleLogIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setError("")
            })
            .catch(error => {
                console.error(error);
            })
    }
    const glassStyle = {
        background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px'
      };

    return (
        <div className="container mx-auto p-5 bg-red-600 border-2">
            <Helmet>
                <title>Toy Stars-Login</title>
            </Helmet>
                <form style={glassStyle} onSubmit={handleLogin} className="grid grid-cols-1 rounded-t-lg md:w-1/4 mx-auto p-5 ">
                    <input className="input shadow-xl input-bordered input-error w-full max-w-xs mx-auto " type="email" name="email" placeholder="Email" required />
                    <input className="my-5 shadow-xl input input-bordered input-error w-full max-w-xs mx-auto" type="password" name="password" placeholder="Password" required />
                    <input className="btn-outline p-3 text-lg font-bold rounded-lg bg-red-600" type="submit" value="Login" />
                    <p className="text-center my-3"><span className="text-lg text-white font-bold ">Are You New in Toy Stars Please</span> ?<Link to="/register"> <span className="text-xl font-bold text-black">Register</span></Link></p>
                </form>
                <div className="flex justify-center items-center gap-5 bg-black w-1/4 mx-auto p-3 text-white rounded-b-lg">
                    <FaGoogle></FaGoogle>
                    <button onClick={handleGooleLogIn}> Google Log in</button>
                </div> 
            <p>{error}</p>
        </div>
    );
};

export default Login;