import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Awards from './Awards';
import Banner from './Banner';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className=" home-page">
            <Banner />
            <Awards />

            <div className='my-4 cursor-pointer' onClick={() => navigate("/awards")}>
                <Typography color="blue" align='center'>
                    View All
                </Typography>
            </div>
        </div>
    );
}

export default Home;
