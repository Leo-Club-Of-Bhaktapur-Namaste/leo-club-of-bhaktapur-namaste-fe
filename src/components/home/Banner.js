import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showArrows={true}>
            <div>
                <img src="https://imgs.search.brave.com/LSULvcD3T8IqNxo58BiXm3CDmvxCNb-ZNmegEu1bU2M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVvLWNsdWJzLmRl/L28vYWRhcHRpdmUt/bWVkaWEvaW1hZ2Uv/NzEzODYzOTkvUHJl/dmlldy0xMDAweDAv/V2VpaG5hY2h0bGlj/aGUlMjBWaWRlb3Ml/MjB2b24lMjBDbHVi/cy4wMF8wMF8zMl8z/Ni5TdGFuZGJpbGQw/MDIucG5n" alt="leo" />
                {/* <p className="legend">Embracing Menstrual Hygiene</p> */}
            </div>
            <div>
                <img src="https://imgs.search.brave.com/FW4UEzRjpwB4SwOIZCq2Ogafae1bXhOhUW6PYlsnr5Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bGVvLWNsdWJzLmRl/L28vYWRhcHRpdmUt/bWVkaWEvaW1hZ2Uv/OTk5NjU1NTMvUHJl/dmlldy0xMDAweDAv/NCUyMHp1JTIwM0lN/R18zMDAzLmpwZw" alt="leo" />
                {/* <p className="legend">Youth Forum</p> */}
            </div>
        </Carousel>)
}
export default Banner;
