import React, { Fragment } from "react";
import CardComponent from "../../../components/CardComponent";
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
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)'
                }}
            >
                Cards Section
            </Typography>

            <CardGridComponent />
        </Fragment>
    );
};
export default CardsSection;