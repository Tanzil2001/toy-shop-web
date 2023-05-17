import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Home/Home/Home";
import AllToys from "../Pages/AllToys";

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
                loader: ()=>fetch('http://localhost:5000/alltoys')
            }
        ]
    }
])


export default router;