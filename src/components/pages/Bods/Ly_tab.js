import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import BodCard from './BodCard';
import { Container, Grid } from '@mui/material';

const LyTab = (props) => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        {Object.keys(props.data).map((element, index) => (
                            <Tab key={index} label={element} value={index} />
                        ))}
                    </TabList>
                </Box>
                <TabContent data = {props.data}/>
            </TabContext>
        </Box>
    )
}

const TabContent = (props) => {
    return (
        <Container maxWidth="xl">
            {Object.keys(props.data).map((element, index) => (
                <TabPanel key={index} value={index}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent="center" direction="row" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} >
                            {props.data[element].map((details, index) => (
                                <Grid item xs={4} sm={4} md={4} key={index}>
                                    <BodCard key={index} bod_details={details} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </TabPanel>
            ))}
        </Container>

    )
}

export default LyTab;