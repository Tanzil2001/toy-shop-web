import { useEffect, useState } from 'react';
import ShowShopeByCategory from '../../Pages/Show/ShowShopByCategory/ShowShopeByCategory';
import GoogleFontLoader from 'react-google-font-loader';

const ShopByCategory = () => {
  const [category, setCategory] = useState([])
  const [activeTab, setActiveTab] = useState('Marvel');

  useEffect(() => {
    fetch(`https://assignment-11-server-teal.vercel.app/category?cat=${activeTab}`)
      .then(res => res.json())
      .then(data => {
        setCategory(data);
      })
  }, [activeTab])

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <>
      <GoogleFontLoader
        fonts={[
          {
            font: 'Oleo Script Swash Caps',
            weights: [400, 700],
          },
          {
            font: 'Yesteryear',
            weights: [400, '400i', 700],
          },
        ]}></GoogleFontLoader>
      <div className='border-2'>
        <h1 style={{fontFamily: 'Oleo Script Swash Caps'}} className="text-5xl text-black text-center mt-16 mb-3 p-5">Shop By Category</h1>
        <div className=" text-center">
          <div className="text-center w-100 m-auto">
            <div className="md:flex justify-center items-center gap-5 mb-16">
              <div
                onClick={() => handleTabChange("Marvel")}
                className={`btn btn-outline btn-ghost shadow-xl ${activeTab == "Marvel" ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white" : ""
                  }`}
              >
                Marvel
              </div>
              <div
                onClick={() => handleTabChange("Avengers")}
                className={`btn btn-outline btn-ghost shadow-xl ${activeTab == "Avengers" ? " bg-gradient-to-r from-blue-600 via-purple-100 to-pink-500 text-black" : ""
                  }`}
              >
                Avengers
              </div>
              <div
                onClick={() => handleTabChange("Star Wars")}
                className={`btn btn-outline btn-ghost shadow-xl ${activeTab == "Star Wars" ? " bg-black  text-white" : ""
                  }`}
              >
                Star wars
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-5 p-10 md:flex gap-5 justify-center bg-gradient-to-r from-red-600 via-slate-700 to-red-600 items-center">
          {
            category.map(toy => <ShowShopeByCategory
              key={toy._id}
              toy={toy}
            ></ShowShopeByCategory>)
          }
        </div>
      </div>
    </>
  );
};

export default ShopByCategory;