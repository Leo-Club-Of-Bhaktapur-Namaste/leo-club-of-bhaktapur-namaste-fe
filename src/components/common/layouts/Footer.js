import React from 'react';
import { Box, Link, Typography } from "@mui/material";
import { pages } from 'data/nav_page';

const Footer = () => {
    return (
        <Box
            sx={{
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
            }}
        >
            <Typography
                variant="body1"
                color="text.secondary"
                sx={{ textAlign: 'center' }}
            >
                Leo Club of Bhaktapur Namaste
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >

                {
                    pages.map((page) => (
                        <Link
                            href={page.value}
                            target="_blank"
                            rel="noopener noreferrer"
                            color="text.secondary"
                            underline="hover"
                            key={page.value}
                        >
                            {page.label}
                        </Link>
                    ))
                }
            </Box>
        </Box>
    );
};

Footer.styled = {

    position: 'fixed',

    bottom: 0,

    width: '100%',

};

export default Footer;