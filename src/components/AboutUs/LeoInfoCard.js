import React from 'react';
import { Card, Grid} from "@mui/material";
import styled from '@emotion/styled';

const CustomCard = styled(Card)({
    boxShadow: 2,
    borderRadius: 1,
    padding: 2,
    fontSize: '1rem',
    height: '100%'
});

const LeoInfoCard = ({ data }) => {
    const { image, title, description } = data;

    return (
        <Grid item xs={12} md={4}>
            <CustomCard>
                <Grid container justifyContent="center" alignItems="center"
                    sx={{p:{xs: 1, md: 2}}}
                    >
                    <Grid item xs={12} md={3}>
                        <img
                            alt="Lions"
                            src={image}
                            style={{ width: '100%', maxWidth: 100 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <h3 className="heading3">{title}</h3>
                        <div>{description}</div>
                    </Grid>
                </Grid>
            </CustomCard>
        </Grid>
    );
};

export default LeoInfoCard;
