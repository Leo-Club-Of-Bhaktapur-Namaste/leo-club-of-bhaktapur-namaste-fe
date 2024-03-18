import React, { useState } from 'react';
import { Card, Grid, Avatar, Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { aboutTimeline } from 'data/about-us';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styled from '@emotion/styled';

const AboutTimelineCard = () => {
    const [aboutSection, setAboutSection] = useState(0);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const currentTimelineItem = aboutTimeline[aboutSection];
    const CustomTypography = styled(Typography)({
        variant: "subtitle1"
    })

    const renderDescription = () => {
        if (currentTimelineItem.description) {
            return (
                <p style={{ padding: '1rem', whiteSpace: 'pre-wrap', textAlign: 'left' }}>{currentTimelineItem.description}</p>
            );
        } else {
            return (
                <Box sx={{ textAlign: 'left' }}>
                    <CustomTypography>
                        <strong>Name:</strong> {currentTimelineItem.name}
                    </CustomTypography>
                    <CustomTypography>
                        <strong>Email:</strong> {currentTimelineItem.email}
                    </CustomTypography>
                    <CustomTypography>
                        <strong>Position:</strong> {currentTimelineItem.position}
                    </CustomTypography>
                    <CustomTypography>
                        <strong>Leo Member Since:</strong> {currentTimelineItem.leo_since}
                    </CustomTypography>
                    <CustomTypography>
                        <strong>"{currentTimelineItem.slogan}"</strong>
                    </CustomTypography>
                </Box>
            );
        }
    };

    return (
        <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 4, marginTop: 4 }}>
            <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 12 }} >
                <Grid item xs={8}>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center"
                        alignItems="center">
                        <Grid item xs={4} sm={2} md={4}>
                            <Avatar
                                alt={currentTimelineItem.title}
                                src={currentTimelineItem.image}
                                sx={{ width: 250, height: 250 }} />
                        </Grid>
                        <Grid item xs={4} sm={6} md={8}>
                            <h1>{currentTimelineItem.title}</h1>
                            {renderDescription()}
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
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Grid>
            </Grid>
        </Card>
    );
};

export default AboutTimelineCard;
