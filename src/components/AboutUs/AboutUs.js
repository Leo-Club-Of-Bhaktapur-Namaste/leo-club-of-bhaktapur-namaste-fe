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
                <Grid container spacing={{ xs: 2, md: 2 }} columns={{ sm: 4, md: 8 }}>
                    <Grid item xs={4}>
                        <Card sx={{ boxShadow: 2, borderRadius: 1, padding: 1, fontSize: '1rem', textAlign: 'center' }}>

                            <Grid container spacing={2} columns={2}>
                                <Grid item xs={1}>
                                    <h3 className="heading3">Lions Club</h3>
                                </Grid>
                                <Grid item xs={1}>
                                    <img src="data:image/png;base64,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" alt="Lions" />
                                </Grid>
                            </Grid>
                            <div className=''>Lions Clubs International, is an international service organization, currently headquartered in Oak Brook, IL, USA. As of January 2020, it had over 46,000 local clubs and more than 1.4 million members in more than 200 countries and geographic areas around the world.</div>
                        </Card></Grid>
                    <Grid item xs={4}>

                        <Card sx={{ boxShadow: 2, borderRadius: 1, padding: 1, fontSize: '1rem', textAlign: 'center' }}>
                            <Grid container spacing={2} columns={2}>
                                <Grid item xs={1}>
                                    <h3 className="heading3">Leo Clubs</h3>
                                </Grid>
                                <Grid item xs={1}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA2CAMAAAClUqpcAAAAVFBMVEX///9+cnd8cHV6bXKNg4ft7Ox3am/49/dyZWrAu71xY2nMyMqJfoPFwMLb2NnT0NHg3t+tpqnn5eaYj5O1r7GlnqFnWF5sXWOfl5qDeH27tbeTiY0LusgIAAAEZElEQVRIiY2W2XqrOgxGbYznCU8FzPu/55EMpNktPa0v0n4JC0m/BouQp8Oj134c7SN/fOTpyBolkXmJMWT4J9S/okuOZTJK4DGseGn/CObsGKXTRMeZFI9/czRufJ7o7twJUiYPm3/FwgbuAcg0IW66QCUUTf/Lxn0HJxWA4h0U+GmO8KOTc7P47CM4F6Vm+chxE2NrP1kUVSvGHhOjLMn6OKZHcGrKVjbRp/gKIb425Z4tKr7DX+G/g7ZDlEuL7AlkG7cy+1Wk76A7X1ar+A66dGVy7t+4+VVXxXy3aK5ULNNXLmyfr3iBjIEcCE7H/aP/6uu23KHO7HY1tda2CUHWXg/SL2XgSJ+PDgkO6iUOHq4QnMvlqbeS/QvuXM3iUElvYoCs8nGCQPAg3OaQ6lqMdv8UQdizqAff637UHWOk6mOc9RSnk0hpW2oSbXuvdm7kbNqyoKt7WEd3nBYjWlQ1De0ihqzf5JEmx/3s1lRkG6pe2VmGqyx7Q6T0mdgP75YXyE5IRpl2yk5VAdxA1TJUpYLRkgMScguvXB4QwemxK1Dj9AbFK49QBnuhkZxt1S9nayFtfBNanwX9BA0MK/ZqZJramaJS96FPNsSP0CUni94om24wwIH+HEUuNr/IfGaC532kPvCPy1Ore02pvIvTB7inqrW3VwZjbfhaRyBxr3z65txtUcPDpzgzc61/Jj5zAR5nAt/wfifm0Md6gTiST3GErqj855SskQgi9cFWECqjw1gCx63qPVepRfFylFEPDaFzN3IkeK0oy1L7NbDtHSO7QVOH6lK3kCQvBhp7JpJCeitJvfuzYaItb+JIgxa1l2DQRm4TZM6LyVT01+x861pDADz42reG4H1fIHhsDfwBKYLuDkYkVWfbB6NDQoF9aql7i+JAqUxQOHRHV9cuYzrmksAn8IeIehc5WxbS60IWo8zqQwaQUb8s9hAIVnJACcAFwtCSFJ/XXmY1+aFLJ2GNAE7z+UvCAojLB+iIZvhsl+mzO1BqnyCGvsIDogKo4Nd2cJQWwKTqmLuk57a9c3gWEKcbksSEqkLrRCNgRm0MQEdXHsHN7L9SI9JOqgPfBIAM5iFcFTMWK5MW5pCMhpDnZcDquGoor5TzjCpAeHDHeMGkr0pUuWpSH69Iz42zxizE8RsEhy2ACW7ctcN9ZZ/WiLjKstYgeVUvkJ3gBJ3rnRKUPIG9YOTcKwa1ysq7q2JykAPu66YfwLplHjtmXJ3idDY5+BRjdLCt4KXqnkKEIjDs3gHYezqwvybRiZwe7lXC1+1qQARHAZSrAMb3UGj0++2IJwgFOjI371gAl1Oj5Jw7YFCWdjxyiCaxtalgyVGY9eEu8tRESdTUnzg4spQMkx7bigpjcORgd0ieTHtecl4nb0c/QZb6fo6O2tbt920O1tXLYq/ltDjbX6zdRsfaSakr44/449qJDabduedi27P250VX4ooJQ813bQOHYf2H+G6bsMTDNm8tbvPP2+Z/T3hARR2BUnMAAAAASUVORK5CYII=" alt="Leos" />
                                </Grid>
                            </Grid>
                            <div className=''>Leo clubs are a youth organization of Lions Clubs International. Leo clubs encourage youths to develop leadership qualities by participating in social service activities. Leo club members are addressed as "Leos."</div>
                        </Card>
                    </Grid>
                </Grid>
                <Card sx={{ boxShadow: 3, borderRadius: 2, padding: 4, marginTop: 4 }}>
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
