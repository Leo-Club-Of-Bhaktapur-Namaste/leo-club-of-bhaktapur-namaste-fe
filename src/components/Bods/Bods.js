import * as React from 'react';
import LeoDetails from 'components/common/layouts/LeoDetails';
import { Card, CardContent, Container } from '@mui/material';
import bod_details from "../../data/bod_details.json";
import LyTab from 'components/common/layouts/LyTab';
import TabContent from 'components/common/layouts/TabContent';
import BodCard from './BodCard';

const Bods = () => {
    const ly = Object.keys(bod_details)
    return (
        <div>
            <LeoDetails />
            <Container maxWidth="xl">
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <h1>Bod Members</h1>
                    <CardContent>
                        <LyTab tab_data={ly}>
                            <TabContent data={bod_details}>
                                <BodCard />
                            </TabContent>
                        </LyTab>
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Bods;