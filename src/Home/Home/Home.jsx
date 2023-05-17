import { useEffect, useState } from "react";

const Home = () => {

    const [data , setData] = useState([]);
    useEffect(()=>{
        fetch('/data/toy.json')
        .then(res=> res.json())
        .then(data => {
          setData(data);
        })
      },[])
    return (
        <div>
            <img src={data.image} alt="" />
            <p>my home</p>
        </div>
    );
};

export default Home;