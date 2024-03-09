import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { awards } from 'data/awards';

const Awards = () => {
    return (
        <Container maxWidth="xl">
                <div className='wrapper'>

                    <h1>Our Awards</h1>
                    <Grid container justifyContent="center" direction="row" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }}>

                        {awards.slice(0, 4).map((award, key) => (
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
                        ))}

                    </Grid>
                </div>
        </Container>
    )
}

export default Awards;
