import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";

const Register = () => {
    const [error, setError] = useState('') ;
    const { registerUser } = useContext(AuthContext)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);

        form.reset();
        if(password.length < 6){
            return setError('Password should be at least 6 charecter')
        }

        registerUser(email, password)
            .then(result => {
                const registerdUser = result.user;
                console.log(registerdUser);
                updateUserInfo(registerdUser, name, photo)
                form.reset();
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })

    }
    const updateUserInfo = (user, name, photo) => {
        updateProfile(user, { displayName: name, photoURL: photo })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    };
    const glassStyle = {
        background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px'
      };
    return (
        <div className="p-5 bg-red-600 container mx-auto border-2">
            <Helmet>
                <title>Toy Stars-Register</title>
            </Helmet>
            <form style={glassStyle} onSubmit={handleRegister} className="grid grid-cols-1 rounded-lg bg-red-600 md:w-1/4 p-5 mx-auto">
                <input className="my-5 shadow-xl input input-bordered input-error w-full max-w-xs mx-auto" type="text" name="name" placeholder="Name" required />
                <input className="my-5 shadow-xl input input-bordered input-error w-full max-w-xs mx-auto" type="email" name="email" placeholder="Email" required />
                <input className="my-5 shadow-xl input input-bordered input-error w-full max-w-xs mx-auto" type="text" name="photo" placeholder="Photo URL" required />
                <input className="my-5 shadow-xl input input-bordered input-error w-full max-w-xs mx-auto" type="password" name="password" placeholder="Password" required />
                <input className="btn btn-outline bg-red-600 text-white font-bold" type="submit" value="Register" />
                <p className="mt-5 text-center"><span className="text-lg font-bold text-white">Already Registered ? Please</span><Link to="/login"><span className="text-xl font-bold text-black">Login</span> </Link></p>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Register;