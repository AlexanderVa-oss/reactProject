// CardsSection.jsx
import React, { Fragment } from "react";

import CardGridComponent from "../../../components/CardGridComponent";
import Typography from '@mui/material/Typography'

const CardsSection = () => {
    return (
        <Fragment>
            <Typography
                variant="h3"
                color="initial"
                sx={{
                    fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem' }
                }}
            >
                Cards Section
            </Typography>

            <CardGridComponent />
        </Fragment>
    );
};
export default CardsSection;