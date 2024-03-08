import React from "react"
const { TabPanel } = require("@mui/lab")
const { Box, Grid } = require("@mui/material")

const TabContent = (props) => {
    return (
        <div>
            {Object.keys(props.data).map((element, index) => (
                <TabPanel key={index} value={element}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container justifyContent="center" direction="row" spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 16 }} >
                            {props.data[element].map((details, index) => (
                                <Grid item xs={4} sm={4} md={4} key={index}>
                                    {/* <BodCard key={index} bod_details={details} /> */}
                                    {/* {props.children} */}
                                    {React.cloneElement(props.children, { key: index, details })}
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </TabPanel>
            ))}
        </div>
    )
}

export default TabContent