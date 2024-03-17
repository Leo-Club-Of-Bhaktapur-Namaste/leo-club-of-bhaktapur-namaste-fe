import { Card, Grid, Container, Avatar } from '@mui/material';
import LeoDetails from 'components/common/layouts/LeoDetails';
import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { aboutTimeline } from 'data/about-us';
import Lions_Clubs_International_logo from '../../assets/images/logos/Lions_Clubs_International_logo.png'
import internaltional_leo_logo from '../../assets/images/logos/internaltional_leo_logo.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutUs = () => {
    const [aboutSection, setAboutSection] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <LeoDetails />
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 8 }}>
                    <Grid item xs={4}>
                        <Card sx={{ boxShadow: 2, borderRadius: 1, padding: 2, fontSize: '1rem', height: '100%' }}>

                            <Grid justifyContent="center" alignItems="center" container spacing={2} columns={12}>
                                <Grid item xs={3}>
                                    <img
                                        alt="Lions"
                                        src={Lions_Clubs_International_logo}
                                        style={{ width: 100 }} />
                                </Grid>
                                <Grid item xs={9}>
                                    <h3 className="heading3">Lions International</h3>
                                    <div className=''>Lions Clubs International, is an international service organization, currently headquartered in Oak Brook, IL, USA. As of January 2020, it had over 46,000 local clubs and more than 1.4 million members in more than 200 countries and geographic areas around the world.</div>
                                </Grid>
                            </Grid>
                        </Card></Grid>
                    <Grid item xs={4}>

                        <Card sx={{ boxShadow: 2, borderRadius: 1, padding: 2, fontSize: '1rem', height: '100%' }}>
                            <Grid justifyContent="center" alignItems="center" container spacing={2} columns={12}>
                                <Grid item xs={9}>
                                    <h3 className="heading3">Leo International</h3>
                                    <div className=''>Leo clubs are a youth organization of Lions Clubs International. Leo clubs encourage youths to develop leadership qualities by participating in social service activities. Leo club members are addressed as "Leos."</div>
                                </Grid>
                                <Grid item xs={3}>
                                    <img
                                        alt="Leos"
                                        src={internaltional_leo_logo}
                                        style={{ width: 100 }} />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 4, marginTop: 4 }}>
                    <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 12 }}>
                        <Grid item xs={8}>
                            <h1>{aboutTimeline[aboutSection].title}</h1>

                            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <Grid item xs={4} sm={2} md={4}>
                                    <Avatar
                                        alt={aboutTimeline[aboutSection].title}
                                        src={aboutTimeline[aboutSection].image}
                                        sx={{ width: 250, height: 250 }} />
                                </Grid>
                                <Grid item xs={4} sm={6} md={8}>
                                    <p style={{ padding: '1rem', whiteSpace: 'pre-wrap' }}>{aboutTimeline[aboutSection].description}</p>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sx={{
                            borderLeft: isSmallScreen ? 'none' : '1px solid silver',
                            borderColor: 'silver',
                        }}>
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
