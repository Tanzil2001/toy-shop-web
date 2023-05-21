import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/bg-png (1).png';
import GoogleFontLoader from "react-google-font-loader";

const MyNavbar = () => {
    const { LogOut, user } = useContext(AuthContext);

    const handleSignOut = () => {
        LogOut()
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navsLinks = <>
        <li style={{fontFamily: 'Berkshire Swash'}} className="mr-3 text-xl "><Link to='/'>Home</Link></li>
        <li style={{fontFamily: 'Berkshire Swash'}} className="text-xl"><Link to="/alltoys">All Toys</Link></li>
        {
            user ? <><li style={{fontFamily: 'Berkshire Swash'}} className="text-xl"><Link to="/myToys">My Toys</Link></li>
                <li style={{fontFamily: 'Berkshire Swash'}} className="text-xl"><Link to="/addAToy">Add A Toy</Link></li></> : ""
        }
        <li className="text-xl" style={{fontFamily: 'Berkshire Swash'}}><Link to="/blog">Blog</Link></li>
        
    </>
    return (
        <>
        <GoogleFontLoader
            fonts={[
                {
                    font: 'Berkshire Swash',
                    weights: [400, 700],
                },
                {
                    font: 'Yesteryear',
                    weights: [400, '400i', 700],
                },
         ]}></GoogleFontLoader>

            <div className=" container mx-auto navbar bg-base-100 h-20 bg-gradient-to-r from-black to-red-600 text-white rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            {navsLinks}
                        </ul>
                    </div>
                    <img className="w-40 rounded-full" src={logo} alt="" />
                    <p style={{fontFamily: 'Yesteryear'}} className="hidden md:block text-2xl">Toy Stars</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navsLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? <img title={user?.displayName} className="w-16 h-16 rounded-full mr-2" src={user?.photoURL} alt="" /> : ""
                        }
                    </div>
                    {
                        user ? <button onClick={handleSignOut} className="btn btn-outline btn-primary">LogOut</button> : <Link to="/login"><button className="btn btn-outline btn-primary">Login</button></Link>
                    }

                </div>
            </div>
        </>
    );
};

export default MyNavbar;