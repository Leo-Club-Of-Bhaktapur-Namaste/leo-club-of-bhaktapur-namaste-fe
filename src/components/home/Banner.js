import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/AMN04602.jpg'
import image2 from '../../assets/images/1658750357963.jpg'

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
            <div>
                <img src={image1} alt="leo" />
                {/* <p className="legend">Embracing Menstrual Hygiene</p> */}
            </div>
            <div>
                <img src={image2} alt="leo" />
                {/* <p className="legend">Youth Forum</p> */}
            </div>
        </Carousel>)
}
export default Banner;
