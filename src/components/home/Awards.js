import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Typography } from "@mui/material";
import { awards } from 'data/awards';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/swiper-element-bundle.css'
import 'swiper/modules/pagination/pagination.min.css'
import './swiper.css'

// import required modules
import { Autoplay, Navigation } from 'swiper';

const Awards = () => {
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
                    {awards.map((award, key) => (
                        <SwiperSlide key={key}>
                            <Card style={{ borderRadius: "16px" }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={award.image}
                                        alt={award.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {award.title}
                                        </Typography>
                                        <Typography height={60} variant="body2" color="text.secondary" align='left'>
                                            {award.description}
                                        </Typography>
                                        <Typography color="text.secondary" align='right'>
                                            {award.date}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Container >
    )
}

export default Awards;
