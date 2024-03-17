import React from 'react';
import { Container } from "@mui/material";
import award_details from '../../data/award_details.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import AwardCard from 'components/awards/AwardsCard';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/swiper-element-bundle.css'
import 'swiper/modules/pagination/pagination.min.css'
import './swiper.css'

// import required modules
import { Autoplay, Navigation } from 'swiper';

const Awards = () => {
    const mergedData = Object.values(award_details).flatMap(arr => arr)
    const award_data = mergedData.slice(0, 6);

    console.log(award_data)
    return (
        <Container maxWidth="xl">
            <div className='wrapper'>

                <h1>Our Awards</h1>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        820: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1100: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    {award_data.map((award, key) => (
                        <SwiperSlide key={key}>
                            <AwardCard details={award} />
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Container >
    )
}

export default Awards;
