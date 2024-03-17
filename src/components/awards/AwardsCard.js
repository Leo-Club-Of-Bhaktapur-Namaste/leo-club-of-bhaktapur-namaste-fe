import React from 'react';
import { Card, CardContent, CardMedia, Typography } from "@mui/material"

const AwardCard = (props) => {
    return (
        <Card style={{ borderRadius: "16px", height: "100%" }}>
                <CardMedia
                    component="img"
                    height="180"
                    sx={{ backgroundColor: '#25294D', color: "white" }}
                    image="https://digitalhub.fifa.com/transform/5a516c76-4e8b-4040-8ebd-1d79bcbcb665/Russia-v-Argentina-FIFA-Futsal-World-Cup-Colombia-2016-Final"
                    alt={props.details.award_name}
                />
                <CardContent>
                    <Typography gutterBottom sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }} component="div">
                        {props.details.award_name}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }} color="text.secondary">
                        {props.details.recived_by}
                    </Typography>
                    <Typography sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }} color="text.secondary">
                        {props.details.recived_from}
                    </Typography>
                </CardContent>
        </Card>
    )
}

export default AwardCard