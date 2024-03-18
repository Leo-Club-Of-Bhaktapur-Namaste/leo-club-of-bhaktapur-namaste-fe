import { Grid, Container } from '@mui/material';
import LeoDetails from 'components/common/layouts/LeoDetails';
import React from 'react';
import { clubInfo } from 'data/about-us';
import LeoInfoCard from './LeoInfoCard';
import AboutTimelineCard from './AboutTimelineCard';

const AboutUs = () => {
    return (
        <>
            <LeoDetails />
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 8 }}>
                    {
                        clubInfo.map((info_data, key) => (
                            <LeoInfoCard data={info_data} key={key} />
                        ))
                    }
                </Grid>
                <AboutTimelineCard />
            </Container>
        </>
    )
}

export default AboutUs;
