
import ShowAllToys from "./Show/ShowAllToys";
import { useEffect, useState } from "react";
// import { useState } from "react";

const AllToys = () => {
    const [search, setSearch] = useState('')
    const [toysData, setToysData] = useState([]);

    useEffect(()=>{
        fetch('https://assignment-11-server-teal.vercel.app/alltoys')
        .then(res => res.json())
        .then(data => {
            setToysData(data)
        })
    },[])
    console.log(toysData);
    // https://assignment-11-server-teal.vercel.app/alltoys


    const handleSearch = () => {
        fetch(`https://assignment-11-server-teal.vercel.app/toySearchByName/${search}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToysData(data);
          });
      };
    return (
        <div className="my-10">
            <div className="search-box p-2 text-center">
                <input
                    className="bg-slate-200 w-1/2 p-3 mb-8 rounded-l-lg"
                    onChange={(event) => setSearch(event.target.value)}
                    type="text"
                />{" "}
                <button onClick={handleSearch} className="bg-primary p-3 px-5 text-white font-bold rounded-r-lg">Search</button>
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