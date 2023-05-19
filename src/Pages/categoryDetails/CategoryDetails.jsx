import { useLoaderData } from "react-router-dom";

const CategoryDetails = () => {
    const categoryDetails = useLoaderData();
    const { available_quantity, description, name, picture_url, price, rating, seller_email, seller_name, sub_category } = categoryDetails ;
 
    return (
        <div className="card card-side bg-base-100 shadow-xl my-10 ">
                <figure><img className="h-96" src={picture_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{sub_category}</p>
                    <p>Price : $ {price}</p>
                    <p>Rating : {rating}</p>
                    <p>Quantity : {available_quantity}</p>
                    <p>Seller Name : {seller_name}</p>
                    <p>Seller Email : {seller_email}</p>
                    <p>Description : {description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
    );
};

export default CategoryDetails;