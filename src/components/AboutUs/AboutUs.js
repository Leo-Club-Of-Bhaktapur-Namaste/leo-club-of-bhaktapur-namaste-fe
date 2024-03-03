import { Card, Grid, Container } from '@mui/material';
import LeoDetails from 'components/common/layouts/LeoDetails';
import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { aboutTimeline } from 'data/about-us';

const AboutUs = () => {
    const [aboutSection, setAboutSection] = useState(0);

    return (
        <>
            <LeoDetails />
            <Container maxWidth="xl">
                <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 4 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 12 }}>
                        <Grid item xs={8}>
                            <h1>{aboutTimeline[aboutSection].title}</h1>

                            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={2} md={4}>
                                    <img
                                        alt={aboutTimeline[aboutSection].title}
                                        src={aboutTimeline[aboutSection].image}
                                        className=""
                                    />
                                </Grid>
                                <Grid item xs={4} sm={6} md={8}>
                                    <p style={{ padding: '1rem', whiteSpace: 'pre-wrap' }}>{aboutTimeline[aboutSection].description}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} borderLeft={1} borderColor={'silver'}>
                            <Timeline position="alternate">
                                {aboutTimeline.map((timeline, i) => (
                                    <TimelineItem className='cursor-pointer' key={i} onClick={() => setAboutSection(i)}>
                                        <TimelineSeparator>
                                            <TimelineDot />
                                            <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent color={i === aboutSection ? "blue" : "grey"} fontWeight={i === aboutSection ? "bold" : ""}>{timeline.title}</TimelineContent>
                                    </TimelineItem>))}
                            </Timeline>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </>
    )
}

export default AboutUs;
