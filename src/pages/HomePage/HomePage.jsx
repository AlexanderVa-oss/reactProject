// HomePage.jsx
import React from "react";
import { Grid } from "@mui/material";
import FirstSection from "./SectionCompoments/FirstSection";
import MainSection from "./SectionCompoments/MainSection";
import CardsSection from "./SectionCompoments/CardsSection";
import SearchSection from "./SectionCompoments/SearchSection";

const HomePage = () => {
    return (
        <Grid textAlign={"center"}>
            <SearchSection />
            <MainSection />
            <FirstSection />
            <CardsSection ></CardsSection>
        </Grid>
    );
};

export default HomePage;