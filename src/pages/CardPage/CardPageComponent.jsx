// CardPageComponent.jsx
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fromServer } from "../EditCardPage/normalizeEdit";
import { Grid, Typography, CardMedia, } from "@mui/material";
import MainSection from "../HomePage/SectionCompoments/MainSection";

const CardPageComponent = () => {
    const [inputsValue, setInputsValue] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        web: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });
    let { id } = useParams();

    const handleImageError = (e) => {
        e.target.src = 'https://cdn.leonardo.ai/users/174b9e54-f96e-4369-950f-7eaad8384fa9/generations/8f9b2e2c-a01b-48b4-8bd4-80d1259f7942/Leonardo_Diffusion_XL_page_not_found_0.jpg';
    };

    useEffect(() => {
        axios
            .get("/cards/" + id)
            .then(({ data }) => {
                setInputsValue(fromServer(data));
            })
    }, [id]);

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MainSection />
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h1" color="initial">{`${inputsValue.title}`}</Typography>
            </Grid>

            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3" color="initial">{`${inputsValue.subtitle}`}</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <CardMedia
                    component="img"
                    image={inputsValue.url}
                    onError={handleImageError}
                    alt="Your Image"
                    height={600} sx={{ objectFit: "cover" }}
                />
            </Grid>

            <Grid item xs={12} sm={8} md={5} sx={{ background: 'none', height: '100%' }}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h4">{`Description: ${inputsValue.description}`}</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5">{`Our phone: ${inputsValue.phone}`}</Typography>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5">{`Our mail: ${inputsValue.email}`}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default CardPageComponent;