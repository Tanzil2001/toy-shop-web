import { useLoaderData } from "react-router-dom";
import ShowAllToys from "./Show/ShowAllToys";

const AllToys = () => {
    const toysData = useLoaderData();
    console.log(toysData);
    return (
        <div>
            {
                toysData.map(toy =><ShowAllToys
                 key={toy._id} 
                 toy={toy}
                ></ShowAllToys> )
            }
        </div>
    );
};

export default AllToys;