
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
                <img  src="/Banner/b2.png" />


                </div>
                <div>

                <img  src="/Banner/b3.png" />

                </div>
                <div className="h-100px"  >
                <img  src="/Banner/bs.PNG" />

                </div>
                <div style={{ height: '50vh' }}>
                <img  src="/Banner/BIM.jpeg" />


                </div>
            </Carousel>
        </div>
    );
};

export default Banner;