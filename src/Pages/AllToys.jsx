import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./Show/ShowAllToys";
// import { useState } from "react";

const AllToys = () => {
    // const [toys , setToys] = useState([]);
    // const [search, setSearch] = useState('')
    const toysData = useLoaderData();
    console.log(toysData);

    // const handleSearch = () => {
    //     fetch(`http://localhost:5000/getJobsByText/${searchText}`)
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         setToys(data);
    //       });
    //   };
    return (
        <div className="my-10">
            <div className="search-box p-2 text-center">
                <input
                    className="bg-slate-200 w-1/2 p-3 mb-8 rounded-l-lg"
                    onChange={(event) => (event.target.value)}
                    type="text"
                />{" "}
                <button className="bg-primary p-3 px-5 text-white font-bold rounded-r-lg">Search</button>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toysData.map(toy => <ShowAllToys
                                key={toy._id}
                                toy={toy}
                            ></ShowAllToys>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;