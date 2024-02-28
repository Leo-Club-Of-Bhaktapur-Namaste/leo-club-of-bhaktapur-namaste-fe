import * as React from 'react';
import LyTab from './Ly_tab';
import LeoDetails from 'components/common/layouts/LeoDetails';
import { Card, CardContent, Container } from '@mui/material';
import Data from "../../data/bod_details.json";

const Bods = () => {
    return (
        <div>
            <LeoDetails />
            <Container maxWidth="xl">
                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                    <h1>Bod Members</h1>
                    <CardContent>
                        <LyTab data={Data} />
                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Bods;