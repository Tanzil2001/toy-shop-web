import { Link } from "react-router-dom";

const ShowMyToys = ({ toys, handleDelete }) => {

    const {_id, picture_url, seller_email, seller_name, sub_category, price, available_quantity, description } = toys;
    
    return (
        <tr>
            <td>
                <div className="mask w-24 h-24">
                    <img src={picture_url} />
                </div>
            </td>
            <td>
                {seller_email}
            </td>
            <td>{seller_name}</td>
            <td>$ {price}</td>
            <td>{sub_category}</td>
            <td>{available_quantity} Pice</td>
            <td>{description}</td>
            <th>
                <Link to={`/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>
            </th>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;