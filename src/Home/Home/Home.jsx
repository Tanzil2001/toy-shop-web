import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";



const Home = () => {

    return (
            <div className="my-8">
            <Helmet>
                <title>Toy Home</title>
            </Helmet>
                <Banner></Banner>
                <ShopByCategory></ShopByCategory>
            </div>
    );
};

export default Home;