import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import MyNavbar from "../Shared/MyNavbar";

const MainLayout = () => {
    return (
        <div>
            <MyNavbar></MyNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;