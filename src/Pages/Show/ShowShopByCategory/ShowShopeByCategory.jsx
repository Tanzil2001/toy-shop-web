import AOS from 'aos';
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../../../Provider/AuthProvider';


const ShowShopeByCategory = ({ toy }) => {
    const {user} = useContext(AuthContext) ;

    const { picture_url, name, rating, price, _id } = toy;
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    const handleTost =()=>{
        if(!user){
            alert('You have to Login First')
        }
    }
    const glassStyle = {
        background: 'linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3))',
        backdropFilter: 'blur(10px)',
        borderRadius: '10px',
        padding: '20px'
      };
    return (
        <div>
            <div style={glassStyle} data-aos="fade-right" className="card w-full md:w-96 bg-base-100 shadow-xl mb-5">
                <figure><img  data-aos="fade-right"  className="h-[300px]" src={picture_url} alt="Shoes" /></figure>
                <hr />
                <div className="card-body text-black rounded-b-xl">
                    <h2 className="card-title">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>
                    <div onClick={handleTost} className="card-actions justify-end">
                        <Link to={`/categoryDetails/${_id}`}><button className="btn btn-outline btn-primary shadow-xl">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowShopeByCategory;