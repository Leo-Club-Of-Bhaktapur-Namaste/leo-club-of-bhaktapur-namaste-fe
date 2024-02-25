import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
            <div>
                <img src="/images/AMN04602.jpg" alt="leo" />
                {/* <p className="legend">Embracing Menstrual Hygiene</p> */}
            </div>
            <div>
                <img src="/images/1658750357963.jpg" alt="leo" />
                {/* <p className="legend">Youth Forum</p> */}
            </div>
        </Carousel>)
}
export default Banner;
