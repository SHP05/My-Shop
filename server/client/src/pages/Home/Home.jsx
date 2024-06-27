import "./home.css"
import Navbar from "../../component/Navbar/NavbarNew/NavbarResp";
import Carousel from "../../component/carousel/Carousel";
import HomeProducts from "./Products";
import Offers from "./Offer_Component";

const Home = () => {
    return (
        <>
            <main>
                <Navbar />
                <Carousel />
                <Offers/>
                <HomeProducts />
            </main>
        </>
    )
}
export default Home;