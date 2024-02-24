import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Tab, Tabs, Typography } from "@mui/material";
import { awards } from 'data/awards';
import { useNavigate } from 'react-router-dom';

const Awards = () => {
    const [year, setYear] = useState("2024");
    const handleChange = (e, val) => {
        setYear(val);
    }
    const navigate = useNavigate();

    return (
        <div className='wrapper'>

            <h1>Our Awards</h1>
            <div className='border-row' />
            <Tabs value={year} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="2019" value="2019" disabled={year === "2019"} />
                <Tab label="2020" value="2020" disabled={year === "2020"} />
                <Tab label="2021" value="2021" disabled={year === "2021"} />
                <Tab label="2022" value="2022" disabled={year === "2022"} />
                <Tab label="2023" value="2023" disabled={year === "2023"} />
                <Tab label="2024" value="2024" disabled={year === "2024"} />
            </Tabs>
            <Grid container spacing={2}>

                {awards.map((award, key) => (
                    <Grid key={key} item xs={3} onClick={() => navigate(`/awards/${award.id}`)} >
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
        </div >
    )
}

export default Awards;
