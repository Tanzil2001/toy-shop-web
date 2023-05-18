import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowMyToys from "../Show/ShowMyToys/ShowMyToys";

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    const url = `http://localhost:5000/alltoys?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            })
    }, [url])
    return (
        <div>
            <div className="overflow-x-auto w-full my-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Seller Email</th>
                            <th>Seller Name</th>
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
                            ></ShowMyToys>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;