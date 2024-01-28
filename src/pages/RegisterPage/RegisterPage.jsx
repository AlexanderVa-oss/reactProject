// RegisterPage.jsx
import React, { useState } from 'react';
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import normalizeRegister from "./normalizeRegister";
import validate from "../../validation/registerValidation";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInputComponentAll from "../../components/TextInputComponentAll";

const RegisterPage = () => {
    const [inputsValue, setInputsValue] = useState({
        first: "",
        middle: "",
        last: "",
        email: "",
        password: "",
        phone: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
        isBusiness: false,
    });
    const [errors, setErrors] = useState({
        first: "",
        last: "",
        email: "",
        password: "",
        phone: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });

    const navigate = useNavigate();

    const handleIsBusinessChange = (event) => {
        setInputsValue({ ...inputsValue, isBusiness: event.target.checked });
    };

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

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const userData = normalizeRegister(inputsValue);

        try {
            const response = await axios.post("/users", userData);
            if (response.status === 200 || response.status === 201) {
                navigate(ROUTES.LOGIN);
            } else {
                toast.error('🔒 Something Went Wrong');
            }
        } catch (err) {
            toast.error('🔒 Something Went Wrong');
            console.error('There was an error submitting the form: ', err);
        }
    };

    const allRequiredFieldsFilled = ['first', 'last', 'email', 'password', 'phone', 'country', 'city', 'street', 'houseNumber', 'zip']
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
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            autoComplete="given-name"
                            name="first"
                            required
                            fullWidth
                            id="first"
                            label="First Name"
                            autoFocus
                            value={inputsValue.first}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.first && <Alert severity="error">{errors.first}</Alert>}
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            autoComplete="given-name"
                            name="middle"
                            fullWidth
                            id="middle"
                            label="Middle Name"
                            value={inputsValue.middle}
                            onChange={handleInputsChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            id="last"
                            label="Last Name"
                            name="last"
                            autoComplete="family-name"
                            value={inputsValue.last}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.last && <Alert severity="error">{errors.last}</Alert>}
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
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="new-password"
                            value={inputsValue.password}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.password && <Alert severity="error">{errors.password}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            required
                            fullWidth
                            name="phone"
                            label="Phone"
                            id="phone"
                            autoComplete="new-phone"
                            value={inputsValue.phone}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {errors.phone && <Alert severity="error">{errors.phone}</Alert>}
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            fullWidth
                            name="url"
                            label="Url"
                            id="url"
                            autoComplete="new-url"
                            value={inputsValue.url}
                            onChange={handleInputsChange}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextInputComponentAll
                            fullWidth
                            name="alt"
                            label="Alt"
                            id="alt"
                            autoComplete="new-alt"
                            value={inputsValue.alt}
                            onChange={handleInputsChange}
                            onBlur={handleInputsBlur}
                        />
                        {inputsValue.url && errors.alt && <Alert severity="error">{errors.alt}</Alert>}
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

                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={inputsValue.isBusiness}
                                    onChange={handleIsBusinessChange}
                                    color="primary"
                                />
                            }
                            label="Business Account"
                        />
                    </Grid>
                </Grid>
                <ButtonComponent
                    disabled={!allRequiredFieldsFilled || !noValidationErrors}
                    color="primary">
                    Sign Up
                </ButtonComponent>
            </Box>
            <Grid item m={3}>
                <Link to={ROUTES.LOGIN}>
                    {"Already have an account? Sign in"}
                </Link>
            </Grid>
        </Box>
    );
};

export default RegisterPage;
