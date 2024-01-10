import React, { Fragment } from "react";
import Typography from '@mui/material/Typography'

const FirstSection = () => {
    return (
        <Fragment>
            <Typography
                variant="h1"
                color="initial"
                sx={{
                    fontWeight: 'bold', 
                    textAlign: 'center', 
                    margin: '20px 0', 
                    color: '#333', 
                    textShadow: '2px 2px 4px #aaa' 
                }}
            >
                Alexander Kukushkin React Project
            </Typography>

        </Fragment>
    );
};
export default FirstSection;