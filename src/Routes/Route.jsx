import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home/Home";
import AllToys from "../Pages/AllToys";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddAToy from "../Pages/AddToy/AddAToy";
import MyToys from "../Pages/MyToys/MyToys";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'alltoys',
                element: <AllToys></AllToys>,
                loader: ()=>fetch('http://localhost:5000/alltoys/""')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addAToy',
                element: <PrivetRoute><AddAToy></AddAToy></PrivetRoute>
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            }
        ]
    }
])


export default router;