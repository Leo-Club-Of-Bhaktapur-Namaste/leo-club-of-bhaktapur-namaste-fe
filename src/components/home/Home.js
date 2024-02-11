import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div className="wrapper home-page">
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
                <div>
                    <img src="images/youth.jpg" alt="leo"/>
                    {/* <p className="legend">Youth Forum</p> */}
                </div>
                <div>
                    <img src="images/men.jpg" alt="leo" />
                    {/* <p className="legend">Embracing Menstrual Hygiene</p> */}
                </div>
            </Carousel>
            <h1>Awards</h1>
        </div>
    );
}

export default Home;
