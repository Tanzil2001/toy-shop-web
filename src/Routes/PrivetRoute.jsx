import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivetRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if(loader){
        return <button className="btn loading">loading</button>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;