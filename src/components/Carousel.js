import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carousel1 from '../images/carousel1.png'
import carousel2 from '../images/carousel2.png'

const Carouselcomp = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <section className="carousel">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="item">
                    <img
                        className="image d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption">
                        <p className="caption-header">ENJOY ONLINE SHOPPING</p>
                        <p className="cap-body">New Arrivals Collection</p>
                        <button>LOG IN</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="item">
                    <img
                        className="image d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
        
                    <Carousel.Caption className="caption ">
                    <p className="caption-header">BLACK FRIDAY SALES</p>
                    <p className="cap-body">Order While Stocks Last</p>
                    <button>LOG IN</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
      
    );
  }
  

export default Carouselcomp;