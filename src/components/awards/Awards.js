import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import { awards } from 'data/awards';
import LeoDetails from 'components/common/layouts/LeoDetails';

const Awards = () => {
    const [year, setYear] = useState("2024");
    const handleChange = (e, val) => {
        setYear(val);
    }

    return (
        <>
            <LeoDetails />
            <Container maxWidth="xl">
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <Container maxWidth="xl">

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
                        <Grid container  justifyContent="center" direction="row" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16,  }}>

                            {awards.map((award, key) => (
                                <Grid key={key} item xs={4} sm={4} md={4}  >
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
                    </Container>
                </Card>
            </Container>
        </ >
    )
}

export default Awards;
