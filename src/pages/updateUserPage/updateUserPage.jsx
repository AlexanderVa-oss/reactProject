// UpdateProfilePage.jsx
import React, { useContext, useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import axios from "axios";
import ROUTES from "../../routes/ROUTES";
import normalizeRegister from "../RegisterPage/normalizeRegister";
import { normalizeUserEdit } from "./normalizeUserEdit";
import validate from "../../validation/registerValidation";
import ButtonComponent from "../../components/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextInputComponentAll from "../../components/TextInputComponentAll";
import LoginContext from '../../store/loginContext';

const UpdateProfilePage = () => {
    const [inputsValue, setInputsValue] = useState({
        first: "",
        middle: "",
        last: "",
        phone: "",
        email: "",
        url: "",
        alt: "",
        state: "",
        country: "",
        city: "",
        street: "",
        houseNumber: "",
        zip: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useContext(LoginContext);

    // get user data
    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        const fetchUserData = async () => {
            if (login._id && token) {
                setIsLoading(true);
                try {
                    const response = await axios.get(`/users/${login._id}`);
                    const normalizedData = normalizeUserEdit(response.data);
                    setInputsValue(normalizedData);
                    toast.success("You can update your information");
                } catch (error) {
                    console.error("Failed to fetch user data:", error);
                    toast.error("Failed to load user data");
                } finally {
                    setIsLoading(false);
                }
            } else {
                toast.error("Authentication token not found or user data is not ready");
            }
        };

        if (login?._id) {
            fetchUserData();
        }
    }, [login]);

    // create objeckt for inputs
    let keysArray = Object.keys(inputsValue);

    // helper for inputs
    const handleInputsChange = (e) => {
        setInputsValue((cInputsValue) => ({
            ...cInputsValue,
            [e.target.id]: e.target.value,
        }));
    };

    // checked inputs
    const handleInputsBlur = (e) => {
        const { id, value } = e.target;
        const validationFunction = validate[id];
        if (validationFunction) {
            const { error } = validationFunction(value);
            if (error) {
                setErrors((cErrors) => ({
                    ...cErrors,
                    [id]: error.details[0].message,
                }));
            } else {
                setErrors((cErrors) => {
                    const newErrors = { ...cErrors };
                    delete newErrors[id];
                    return newErrors;
                });
            }
        }
    };

    // submit logic
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userData = normalizeRegister(inputsValue);
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

        try {
            const response = await axios.put(`/users/${login._id}`, userData
            );
            if (response.status === 200 || response.status === 201) {
                toast.success(' User Updated');
                navigate(ROUTES.HOME);
            } else {
                toast.error('🔒 Something Went Wrong');
            }
        } catch (err) {
            setErrors({ ...errors, serverError: err.response.data.message });
            toast.error('🔒 Something Went Wrong');
            console.error('There was an error submitting the form: ', err);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const allRequiredFieldsFilled = ['first', 'last', 'phone', 'country', 'city', 'street', 'houseNumber', 'zip']
        .every(field => {
            const value = inputsValue[field];
            if (typeof value === 'string') {
                return value.trim() !== '';
            }
            if (typeof value === 'number') {
                return value !== 0; 
            }
            return false; 
        });

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
                Edit your profile
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                    {keysArray.map((keyName) => (
                        <React.Fragment key={"fragment" + keyName}>
                            <TextInputComponentAll sx={{ mt: 2 }}
                                fullWidth
                                key={"inputs" + keyName}
                                id={keyName}
                                label={keyName}
                                value={inputsValue[keyName]}
                                onChange={handleInputsChange}
                                onBlur={handleInputsBlur}
                                errors={errors[keyName]}
                            />
                            {errors[keyName] && <Alert key={"alert" + keyName} severity="error">{errors[keyName]}</Alert>}
                        </React.Fragment>
                    ))}
                </Grid>
                <ButtonComponent
                    disabled={!allRequiredFieldsFilled || !noValidationErrors}
                    color="primary">
                    Update
                </ButtonComponent>
            </Box>
        </Box>
    );
};

export default UpdateProfilePage;
