
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Banner = () => {
    return (
        <div>
            <Carousel
               infiniteLoop
               showThumbs={false}
               showStatus={false}
               showArrows={true}
               autoPlay
               interval={1000}
               dynamicHeight={true}
            >
            <div>
                <img  src="../../public/Banner/b2.png" />
                 <h1>Hello</h1>

                </div>
                <div>

                <img  src="../../public/Banner/b3.png" />

                </div>
                <div className="h-100px"  >
                <img  src="../../public/Banner/BIM.jpeg" />

                </div>
                <div style={{ height: '50vh' }}>
                <img  src="../../public/Banner/bs.PNG" />


                </div>
            </Carousel>
        </div>
    );
};

export default Banner;