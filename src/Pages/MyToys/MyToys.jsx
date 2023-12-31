import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowMyToys from "../Show/ShowMyToys/ShowMyToys";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `https://assignment-11-server-teal.vercel.app/alltoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [url])

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
             fetch(`https://assignment-11-server-teal.vercel.app/alltoys/${id}`,{
                method:'DELETE'
             })
             .then(res => res.json())
             .then(data =>{
                if(data.deletedCount > 0){
                    const remainingToys = myToys.filter(toys => toys._id !== id)
                    setMyToys(remainingToys)
                    Swal.fire(
                        'Deleted Toy Successfully '
                      )
                }
             })
            }
          })
    }
    return (
        <div>
            <Helmet>
                <title>Toy Stars-My Toys</title>
            </Helmet>
            <div className="bg-red-600 p-5 overflow-x-auto w-full my-8 container mx-auto">
                <p className="text-center mb-8 text-4xl font-bold font-serif text-white">All Of My Toys Are Here</p>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Sub Category</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Update</th>
                            <th>Delate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(toys => <ShowMyToys
                            key={toys._id}
                            toys={toys}
                            handleDelete={handleDelete}
                            ></ShowMyToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;