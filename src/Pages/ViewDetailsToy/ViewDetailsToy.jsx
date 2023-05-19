import { useLoaderData } from "react-router-dom";


const ViewDetailsToy = () => {
    const allData = useLoaderData();
    const { available_quantity, description, name, picture_url, price, rating, seller_email, seller_name, sub_category } = allData;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl my-10">
                <figure><img className="h-96" src={picture_url} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{sub_category}</p>
                    <p>$ {price}</p>
                    <p>{rating}</p>
                    <p>{available_quantity}</p>
                    <p>{seller_name}</p>
                    <p>{seller_email}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetailsToy;