import React from 'react';
import { Divider, Grid, Typography, useMediaQuery } from '@mui/material';
import './leo_details.css';
import styled from '@emotion/styled';
import Lions_Clubs_International_logo from '../../../assets/images/logos/Lions_Clubs_International_logo.png'
import internaltional_leo_logo from '../../../assets/images/logos/internaltional_leo_logo.png'
import lions_club_of_bhaktapur_namaste from '../../../assets/images/logos/lions_club_of_bhaktapur_namaste.png'
import leo_club_of_bhaktapur_namaste from '../../../assets/images/logos/namaste leo club copy.png'

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
                    src={Lions_Clubs_International_logo}
                    className="image"
                />
            </Grid>
            <Grid item>
                <img
                    alt="Bhaktapur Namaste Lions Club"
                    src={lions_club_of_bhaktapur_namaste}
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
                    src={internaltional_leo_logo}
                    className="image"
                />
            </Grid>
            <Grid item>
                <img
                    alt="Bhaktapur Namaste Leo Club"
                    src={leo_club_of_bhaktapur_namaste}
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
