import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/image1.jpg'
import image2 from '../../assets/images/image2.jpg'
import image3 from '../../assets/images/image3.jpg'
import image4 from '../../assets/images/image4.jpeg'

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
            <div>
                <img src={image3} alt="leo" />
                {/* <p className="legend">Youth Forum</p> */}
            </div>
            <div>
                <img src={image4} alt="leo" />
                {/* <p className="legend">Youth Forum</p> */}
            </div>
        </Carousel>)
}
export default Banner;
