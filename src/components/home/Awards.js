import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { awards } from 'data/awards';
import { useNavigate } from 'react-router-dom';

const Awards = () => {
    const navigate = useNavigate();
    return (
        <div className='wrapper'>

            <h1>Our Awards</h1>
            <Grid container spacing={2}>

                {awards.slice(0,4).map((award, key) => (
                    <Grid item xs={3} key={key} onClick={()=>navigate(`/awards/${award.id}`)}>
                        <Card style={{borderRadius: "16px"}}>
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
    )
}

export default Awards;
