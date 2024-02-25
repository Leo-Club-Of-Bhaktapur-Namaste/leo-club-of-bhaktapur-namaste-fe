import React from 'react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import './leo_details.css';
import styled from '@emotion/styled';

const CustomText = styled(Typography)({
    typography: { sm: 'body1', xs: 'body2' }
})

function LeoDetails() {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <div className='leo_details_container'>
            {isMobile ? <LeoDetailsMobile /> : <LeoDetailsDesktop />}
            <Divider component="li" />
        </div>
    );
}


function LeoDetailsMobile() {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                    <LionsLogo />
                    <LeoLogos />
                </Grid>
            </Grid>

            <ClubDetails />
        </Grid>
    );
}

function LeoDetailsDesktop() {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="center">
            <LionsLogo />
            <ClubDetails />
            <LeoLogos />
        </Grid>
    );
}

const LionsLogo = () => {
    return (
        <>
            <Grid item>
                <img
                    alt="Lions Club International"
                    src="images/logos/Lions_Clubs_International_logo.png"
                    className="image"
                />
            </Grid>
            <Grid item>
                <img
                    alt="Bhaktapur Namaste Lions Club"
                    src="images/logos/lions_club_of_bhaktapur_namaste.png"
                    className="image"
                />
            </Grid>
        </>
    );
}

const LeoLogos = () => {
    return (
        <>
            <Grid item>
                <img
                    alt="Leo Club International"
                    src="images/logos/internaltional_leo_logo.png"
                    className="image"
                />
            </Grid>
            <Grid item>
                <img
                    alt="Bhaktapur Namaste Leo Club"
                    src="images/logos/namaste leo club copy.png"
                    className="image"
                />
            </Grid>
        </>
    )
}

const ClubDetails = () => {
    return (
        <>
            <Grid item>
                <CustomText>The International Association of Lions Clubs</CustomText>
                <CustomText>(Lions Clubs International) ®</CustomText>
                <CustomText>Leo District Council 325 G, MD 325, Nepal</CustomText>
                <CustomText fontWeight="bold">Leo Club of Bhaktapur Namaste</CustomText>
                <CustomText>Sponsored by: Lions Club of Bhaktapur Namaste</CustomText>
                <CustomText>Estd: 2021, Club ID: 149105</CustomText>
            </Grid>
        </>
    )
}

export default LeoDetails;
