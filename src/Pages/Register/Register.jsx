import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

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
    return (
        <div className="p-5 bg-slate-300 border border-2">
            <form onSubmit={handleRegister} className="grid grid-cols-1 ">
                <input className="w-1/2 mb-3 p-2 mx-auto" type="text" name="name" placeholder="Name" required />
                <input className="w-1/2 mb-3 p-2 mx-auto" type="email" name="email" placeholder="Email" required />
                <input className="w-1/2 mb-3 p-2 mx-auto" type="text" name="photo" placeholder="Photo URL" required />
                <input className="w-1/2 mb-3 p-2 mx-auto" type="password" name="password" placeholder="Password" required />
                <input type="submit" value="Register" />
                <Link to="/login">Login </Link>
            </form>
            <p>{error}</p>
        </div>
    );
};

export default Register;