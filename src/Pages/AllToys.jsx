import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./Show/ShowAllToys";

const AllToys = () => {
    const toysData = useLoaderData();
    console.log(toysData);
    return (
        <div className="my-10">
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
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