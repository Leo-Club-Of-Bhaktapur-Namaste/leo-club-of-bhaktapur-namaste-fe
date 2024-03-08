import React from 'react';
import { Card, Container} from "@mui/material";
import award_details from '../../data/award_details.json';
import LeoDetails from 'components/common/layouts/LeoDetails';
import LyTab from 'components/common/layouts/LyTab';
import AwardCard from './AwardsCard';
import TabContent from 'components/common/layouts/TabContent';

const Awards = () => {
    const ly = Object.keys(award_details)

    return (
        <>
            <LeoDetails />
            <Container maxWidth="xl">
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <Container maxWidth="xl">

                        <h1>Our Awards</h1>
                        <div className='border-row' />
                        <LyTab tab_data= {ly}>
                            <TabContent data={award_details}>
                                <AwardCard/>
                            </TabContent>
                        </LyTab>
                    </Container>
                </Card>
            </Container>
        </ >
    )
}

export default Awards;
