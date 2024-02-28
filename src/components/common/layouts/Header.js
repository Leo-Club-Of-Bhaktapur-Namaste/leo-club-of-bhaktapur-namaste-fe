import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import loe_logo from '../../../assets/images/logos/namaste leo club copy.png'
import { useNavigate } from 'react-router-dom';
import { Container, Stack } from '@mui/material';

const drawerWidth = 240;
const pages = [{ label: 'Awards', value: 'awards' }, { label: 'BODs', value: 'bods' }, { label: 'Events', value: 'event' }, { label: 'About Us', value: 'about-us' }, { label: 'Contact Us', value: 'contact-us' }];


function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img onClick={() => navigate("/")} src={loe_logo} alt="namaste" className='header-logo' />
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem disablePadding key={page.value}
            onClick={() => {
              navigate("/" + page.value)
            }}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={page.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" position="sticky">
        <Container maxWidth="xl">

          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} py={1}>
            <Stack direction="row" alignItems="center">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <img onClick={() => navigate("/")} src={loe_logo} alt="namaste" className='header-logo' />
              <Typography
                variant="h6"
                onClick={() => { navigate("/") }}
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 400,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
                className='cursor-pointer'
              >
                LEO CLUB OF BHAKTAPUR NAMASTE
              </Typography>
            </Stack>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {pages.map((page) => (
                <Button
                  key={page.value}
                  onClick={() => {
                    navigate("/" + page.value)
                  }}
                  sx={{ color: 'white' }}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          </Stack>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;