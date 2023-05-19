import { Link } from "react-router-dom";


const ShowShopeByCategory = ({ toy }) => {
    const { picture_url, name, rating, price, _id } = toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img className="h-[300px]" src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/categoryDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowShopeByCategory;