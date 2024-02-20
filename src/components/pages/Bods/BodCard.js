import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import styled from '@emotion/styled';
import EmailIcon from '@mui/icons-material/Email';


const CustomAvatar = styled(Avatar)({
  position: 'absolute',
  border: '5px solid white',
  backgroundColor: '#25294D',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100px',
  height: '100px',
  marginTop: '-15px',
})


const CustomCardBackGround = styled(CardMedia)({
  height: '140px',
  width: '100%',
  backgroundColor: '#25294D',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export default function BodCard(props) {
  return (
    <Card sx={{ maxWidth: 345, position: 'relative' }}>
      {/* <CardMedia
        component="img"
        height="140"
        image={props.bod_details.image}
        alt="your-image-alt"
      /> */}

      <CustomCardBackGround
        component="div"
      />

      <CustomAvatar
        alt={props.bod_details.name}
        src={props.bod_details.image}
      />

      <CardContent sx={{
        marginTop: '45px'
      }}>
        <Typography gutterBottom variant="h5" component="div">
          {props.bod_details.name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {props.bod_details.position}
        </Typography>

        <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center' }}>
          <EmailIcon fontSize="small" style={{ marginRight: '5px' }} />
          <Typography variant="body2" color="text.secondary" sx={{height: '1rem'}}>
            {props.bod_details.email}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}