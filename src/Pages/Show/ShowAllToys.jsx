import { Link } from "react-router-dom";


const ShowAllToys = ({ toy }) => {
    const { name, sub_category, price, available_quantity, seller_name, _id } = toy;
    return (    
            <tr>
                <th>#</th>
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>$ {price}</td>
                <td>{available_quantity} Pice</td>
                <td><Link to={`/viewDetails/${_id}`}><button className="btn btn-primary">View Details</button></Link></td>
            </tr>

    );
};

export default ShowAllToys;