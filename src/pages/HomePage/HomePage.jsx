import React from "react";
import { Grid } from "@mui/material";
import FirstSection from "./SectionCompoments/FirstSection";
import MainSection from "./SectionCompoments/MainSection";
import CardsSection from "./SectionCompoments/CardsSection";

const HomePage = () => {
    return (
        <Grid textAlign={"center"}>
            <MainSection />
            <FirstSection />
            <CardsSection />
        </Grid>
    );
};

export default HomePage;