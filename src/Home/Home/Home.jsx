import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Gallery from "../Gallery/Gallery";
import About from "../../Pages/ExtraSection/About";
import Sale from "../../Pages/ExtraSection/Sale/Sale";


const Home = () => {
   
    return (
            <div className="my-8  container mx-auto">
            <Helmet>
                <title>Toy Stars-Home</title>
            </Helmet>
                <Banner></Banner>
                <ShopByCategory></ShopByCategory>
                <Gallery></Gallery>
                <Sale></Sale>
                <About></About>
            </div>
    );
};

export default Home;