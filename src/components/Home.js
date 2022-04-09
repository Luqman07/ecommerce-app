import Carouselcomp from "./Carousel"
import Collections from "./Collections"
import Mail from "./Mail"
import Navbar from "./Navbar"
import Trend from "./Trend"

const Home = () => {
    return ( 
        <div className="homepage">
            <Navbar/>
            <Carouselcomp/>
            <Collections/>
            <Trend/>
            <Mail/>
        </div>
     );
}
 
export default Home;