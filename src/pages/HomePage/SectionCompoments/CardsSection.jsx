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
                    fontWeight: 'normal',
                    textAlign: 'center',
                    margin: '20px 0',
                    color: '#333',
                    letterSpacing: '1px',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
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