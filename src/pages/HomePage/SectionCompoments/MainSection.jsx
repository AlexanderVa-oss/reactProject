import React, { Fragment } from "react";
import { CardMedia } from "@mui/material";

const MainSection = () => {
    return (
        <Fragment>
            <CardMedia
                component="img"
                image="/assets/images/israelFlag.png"
                alt="Israel Flag"
                />
        </Fragment>
    );
};
export default MainSection;