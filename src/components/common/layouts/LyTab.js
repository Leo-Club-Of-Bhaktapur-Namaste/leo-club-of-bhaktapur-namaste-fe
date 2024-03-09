import React, { useState } from 'react';
const { TabContext, TabList } = require("@mui/lab");
const { Box, Tab } = require("@mui/material");

const LyTab = (props) => {
    const [value, setValue] = useState(props.tab_data[0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} centered>
                        {props.tab_data.map((element, index) => (
                            <Tab key={index} label={element} value={element} />
                        ))}
                    </TabList>
                </Box>
                {props.children}
            </TabContext>
        </Box>
    )
}

export default LyTab