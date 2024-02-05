// CardPageComponent.jsx
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fromServer } from "../EditCardPage/normalizeEdit";
import { Grid, Typography, CardMedia, } from "@mui/material";
import MainSection from "../HomePage/SectionCompoments/MainSection";
import GoogleMap from "../../components/MapComponent";

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

            <Grid container >
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MainSection />
                </Grid>

                <Grid item xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem' } }}
                        color="initial">{`${inputsValue.title}`}
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography
                        variant="h3"
                        sx={{ fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3rem', lg: '4rem' } }}
                        color="initial">{`${inputsValue.subtitle}`}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        image={inputsValue.url}
                        onError={handleImageError}
                        alt="Your Image"
                        height={600} sx={{ objectFit: "cover" }}
                    />
                </Grid>

                <Grid item xs={12} sm={8} md={5} ml={2} sx={{ background: 'none', height: '100%' }}>
                    <Grid item xs={12} md={6} mt={2}>
                        <Typography variant="h5">{`Our phone:`}</Typography>
                        <Typography variant="h6">{`${inputsValue.phone}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} mt={3} sx={{ justifyContent: 'start', alignItems: 'center' }}>
                        <Typography variant="h5">{`Our mail:`}</Typography>
                        <Typography variant="h6">{`${inputsValue.email}`}</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} mt={2}>
                        <Typography variant="h5">{`Adress:`}</Typography>
                        <Typography variant="h6">{`${inputsValue.city} ${inputsValue.street} ${inputsValue.houseNumber}`}</Typography>
                        <Grid item xs={12} mt={2}>
                            <Typography variant="h5">{`Description:`}</Typography>
                            <Typography variant="p">{`${inputsValue.description}`}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} m={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <GoogleMap
                    city={inputsValue.city}
                    street={inputsValue.street}
                    houseNumber={inputsValue.houseNumber}
                />
            </Grid>
        </Grid>
    )
};

export default CardPageComponent;