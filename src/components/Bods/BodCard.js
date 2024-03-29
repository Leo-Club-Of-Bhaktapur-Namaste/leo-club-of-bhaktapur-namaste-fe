import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Avatar, Hidden, Stack } from '@mui/material';
import styled from '@emotion/styled';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';


const CustomAvatar = styled(Avatar)({
  position: 'absolute',
  border: '5px solid white',
  backgroundColor: '#25294D',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100px',
  height: '100px',
  marginTop: '-30px',
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
  let email = props.details.email === "" ? "bhaktapurnamasteleoclub@gmail.com" : props.details.email
  return (
    <Card sx={{ maxWidth: 345, position: 'relative', height: '100%' }} style={{ borderRadius: "16px" }}>
      {/* <CardMedia
        component="img"
        height="140"
        image={props.details.image}
        alt="your-image-alt"
      /> */}

      <CustomCardBackGround
        component="div"
      />

      <CustomAvatar
        alt={props.details.name}
        src={props.details.image}
      />

      <CardContent sx={{
        marginTop: '45px'
      }}>
        <Typography gutterBottom sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }} component="div">
          Leo {props.details.name}
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", md: "1.3rem" } }} color="text.secondary">
          {props.details.position}
        </Typography>

        <Link href={`mailto:${email}`} underline="none">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={0.5} alignItems="center" justifyContent="center">
            <Hidden smDown>
              <EmailIcon color="disabled" fontSize="small" style={{ marginRight: '5px' }} />
            </Hidden>
            <Typography color="text.secondary" sx={{ fontSize: { xs: "0.85rem", md: "1rem" } }}>
              {email}
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}