import { useEffect, useState } from 'react';
import ShowShopeByCategory from '../../Pages/Show/ShowShopByCategory/ShowShopeByCategory';

const ShopByCategory = () => {
    const [category, setCategory] = useState([])
    const [activeTab, setActiveTab] = useState('Marvel');

    useEffect(()=>{
        fetch(`https://assignment-11-server-teal.vercel.app/category?cat=${activeTab}`)
        .then(res => res.json())
        .then(data => {
            setCategory(data);
        })
    },[activeTab])

    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    }

    return (
        <div>
      <h1 className="text-3xl text-center mt-5 p-5">Shop By Category</h1>
      <div className=" text-center">
        <div className="text-center w-100 m-auto">
          <div className="md:flex justify-center items-center gap-5">
            <div
              onClick={() => handleTabChange("Marvel")}
              className={`btn btn-primary ${
                activeTab == "Marvel" ? " bg-slate-500 text-white" : ""
              }`}
            >
              Marvel
            </div>
            <div
              onClick={() => handleTabChange("Avengers")}
              className={`btn btn-secondary ${
                activeTab == "Avengers" ? " bg-slate-500 text-white" : ""
              }`}
            >
              Avengers
            </div>
            <div
              onClick={() => handleTabChange("Star Wars")}
              className={`btn btn-warning ${
                activeTab == "Star Wars" ? " bg-slate-500  text-white" : ""
              }`}
            >
              Star wars
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5  md:flex gap-5 justify-center items-center">
        {
            category.map(toy =><ShowShopeByCategory 
            key={toy._id}
            toy={toy}
            ></ShowShopeByCategory>)
        }
      </div>
    </div>
    );
};

export default ShopByCategory;