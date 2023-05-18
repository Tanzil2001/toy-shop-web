

const ShowAllToys = ({ toy }) => {
    const { name, sub_category, price, available_quantity, seller_name } = toy;
    return (    
            <tr>
                <th>#</th>
                <td>{seller_name}</td>
                <td>{name}</td>
                <td>{sub_category}</td>
                <td>$ {price}</td>
                <td>{available_quantity} Pice</td>
                <td><button className="btn btn-primary">View Details</button></td>
            </tr>

    );
};

export default ShowAllToys;