// FirstSection.jsx
import React from "react";
import Typography from '@mui/material/Typography'

const FirstSection = () => {
    return (
        <Typography
            variant="h1"
            color="initial"
            sx={{
                fontSize: {
                    xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem'
                }
            }}
        >
            Alexander Kukushkin React Project
        </Typography>
    );
};
export default FirstSection;