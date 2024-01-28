// CrearteNewCard.jsx
import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import normalizeRegister from "./normalizeCreateNewCard";
import validate from "../../validation/newCardValidation";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInputComponentAll from "../../components/TextInputComponentAll";

const CreateNewCard = () => {
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
    const [errors, setErrors] = useState({
        title: "",
        subtitle: "",
        description: "",
        phone: "",
        email: "",
        url: "",
        alt: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });

    const handleInputsChange = (e) => {
        const { id, value } = e.target;
        setInputsValue((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));

        const validationResult = validate[id] ? validate[id](value) : null;
        if (validationResult && validationResult.error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: validationResult.error.details[0].message,
            }));
        } else {
            setErrors((prevErrors) => {
                const { [id]: removed, ...rest } = prevErrors;
                return rest;
            });
        }
    };

    const handleInputsBlur = (e) => {
        const { id, value } = e.target;
        const validationResult = validate[id] ? validate[id](value) : null;
        if (validationResult && validationResult.error) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: validationResult.error.details[0].message,
            }));
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                [id]: ""
            }));
        }
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = Object.keys(inputsValue).reduce((acc, field) => {
            const value = typeof inputsValue[field] === 'number' ? String(inputsValue[field]) : inputsValue[field];
            const validationResult = validate[field] ? validate[field](value) : null;
            if (validationResult && validationResult.error) {
                acc[field] = validationResult.error.details[0].message;
            }
            return acc;
        }, {});
        console.log(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const cardData = normalizeRegister(inputsValue);

        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

        if (token) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            };

            try {
                console.log(cardData);
                const response = await axios.post("/cards", cardData, config);
                if (response.status === 200 || response.status === 201) {
                    console.log(response);
                    navigate(ROUTES.HOME);
                } else {
                    toast.error('🔒 Something Went Wrong');
                }
            } catch (err) {
                setErrors({ ...errors, serverError: err.response.data.message });
                toast.error('🔒 Something Went Wrong');
                console.error('There was an error submitting the form: ', err);
            }
        } else {
            toast.error('🔒 You must login Busness');
        }
    };

    const allRequiredFieldsFilled = ['title', 'subtitle', 'description', 'phone', 'email', 'url', 'alt', 'country', 'city', 'street', 'houseNumber',]
        .every(field => inputsValue[field].trim() !== '');

    const noValidationErrors = Object.values(errors).every(error => error === '');

    return (
        <Box
            sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography component="h1" variant="h5">
                Create new Card
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            required
                            name="title"
                            fullWidth
                            id="title"
                            label="Card Title"
                            autoFocus
                            value={inputsValue.title}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.title && <Alert severity="error">{errors.title}</Alert>}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            required
                            name="subtitle"
                            fullWidth
                            id="subtitle"
                            label="Card subtitle"
                            value={inputsValue.subtitle}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.subtitle && <Alert severity="error">{errors.subtitle}</Alert>}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            name="phone"
                            value={inputsValue.phone}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            value={inputsValue.email}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.email && <Alert severity="error">{errors.email}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="description"
                            label="Description"
                            id="description"
                            value={inputsValue.description}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.description && <Alert severity="error">{errors.description}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            fullWidth
                            name="web"
                            label="web"
                            id="web"
                            value={inputsValue.web}
                            onChange={handleInputsChange}
                            />
                        {errors.web && <Alert severity="error">{errors.web}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="url"
                            label="Url"
                            id="url"
                            autoComplete="new-url"
                            value={inputsValue.url}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.url && <Alert severity="error">{errors.url}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="alt"
                            label="Alt"
                            id="alt"
                            autoComplete="new-alt"
                            value={inputsValue.alt}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.alt && <Alert severity="error">{errors.alt}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            fullWidth
                            name="state"
                            label="State"
                            id="state"
                            autoComplete="new-state"
                            value={inputsValue.state}
                            onChange={handleInputsChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="country"
                            label="Country"
                            id="country"
                            autoComplete="new-country"
                            value={inputsValue.country}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.country && <Alert severity="error">{errors.country}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="city"
                            label="City"
                            id="city"
                            autoComplete="new-city"
                            value={inputsValue.city}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.city && <Alert severity="error">{errors.city}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="street"
                            label="Street"
                            id="street"
                            autoComplete="new-street"
                            value={inputsValue.street}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.street && <Alert severity="error">{errors.street}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="houseNumber"
                            label="House Number"
                            id="houseNumber"
                            autoComplete="new-houseNumber"
                            value={inputsValue.houseNumber}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.houseNumber && <Alert severity="error">{errors.houseNumber}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="zip"
                            label="Zip"
                            id="zip"
                            autoComplete="new-zip"
                            value={inputsValue.zip}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.zip && <Alert severity="error">{errors.zip}</Alert>}
                    </Grid>
                </Grid>
                <ButtonComponent
                    disabled={!allRequiredFieldsFilled || !noValidationErrors}
                    color="primary">
                    Create
                </ButtonComponent>
            </Box>
        </Box>
    );
};

export default CreateNewCard