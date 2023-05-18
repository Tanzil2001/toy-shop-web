import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const ShowAllToys = ({ toy }) => {
    const {user} = useContext(AuthContext);
    const { name, sub_category, price, available_quantity } = toy;
    return (    
            <tr>
                <th>#</th>
                <td>{user?.displayName}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>$ {price}</td>
                <td>{available_quantity} Pice</td>
                <td><button className="btn btn-primary">View Details</button></td>
            </tr>

    );
};

export default ShowAllToys;