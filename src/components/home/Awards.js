import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { awards } from 'data/awards';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

// import required modules
import { Autoplay, FreeMode, Navigation } from 'swiper';

const Awards = () => {
    return (
        <Container maxWidth="xl">
            <div className='wrapper'>

                <h1>Our Awards</h1>

                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        820: {
                            slidesPerView: 4,
                            spaceBetween: 40
                        }
                    }}
                    spaceBetween={30}
                    autoplay={true}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    modules={[FreeMode, Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <Grid container justifyContent="center" direction="row" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>
                        {awards.slice(0, 6).map((award, key) => (
                            <SwiperSlide>
                                <Grid item xs={4} sm={4} md={4} key={key}>
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
                                </Grid>
                            </SwiperSlide>
                        ))}

                    </Grid>
                </Swiper>
            </div>
        </Container >
    )
}

export default Awards;
