import React, { Fragment } from "react";
import { CardMedia } from "@mui/material";

const MainSection = () => {
    return (
        <Fragment>
            <CardMedia
                component="img"
                image="/assets/images/israelFlag.png"
                alt="Israel Flag"
                sx={{
                    margin: 'auto',
                    width: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px',
                }}/>
        </Fragment>
    );
};
export default MainSection;