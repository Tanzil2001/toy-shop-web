

const ShowShopeByCategory = ({ toy }) => {
    const { picture_url, name, rating, price, sub_category } = toy;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
                <figure><img src={picture_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}</p>
                    <p>{rating}</p>
                    <p>{sub_category}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowShopeByCategory;