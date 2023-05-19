import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowMyToys = ({ toys }) => {
    const {_id, picture_url, seller_email, seller_name, sub_category, price, available_quantity, description } = toys;

    const handleDelete =(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`http://localhost:5000/alltoys/${id}`,{
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data =>{
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }
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
                <Link to="/update"><button className="btn btn-primary">Edit</button></Link>
            </th>
            <th>
                <button onClick={()=> handleDelete(_id)} className="btn btn-warning">Delete</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;