import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Avatar, Typography, Grid } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import axios from "axios";
import validate from "../../validation/newCardValidation";
import LoginContext from "../../store/loginContext";
import { fromServer } from "./normalizeEdit";
import ButtonComponent from "../../components/ButtonComponent";
import { useContext } from "react";
import React, { useEffect } from 'react';
import TextInputComponentAll from "../../components/TextInputComponentAll";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import normalizeCreateNewCard from "../CreateNewCard/normalizeCreateNewCard";
import { toast } from "react-toastify";


const EditCardPage = () => {
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
  const [errors, setErrors] = useState({});

  let { id } = useParams();

  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !login) {
      return;
    }
    axios
      .get("/cards/" + id)
      .then(({ data }) => {
        if (data.user_id === login._id) {
          toast.success("💕 Now you can update your card", { /* options toast */ });
        } else {
          toast.success("🤔 Not the same user", { /* options toast */ });
        }
        //move to the if
        setInputsValue(fromServer(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, login, navigate]);

  let keysArray = Object.keys(inputsValue);

  const handleInputsChange = (e) => {
    setInputsValue((cInputsValue) => ({
      ...cInputsValue,
      [e.target.id]: e.target.value,
    }));
  };

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

  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const inputsData = normalizeCreateNewCard(inputsValue);

  const handleSubmit = async (event) => {
    console.log(inputsData);
    console.log(inputsValue);
    console.log('it works');
    event.preventDefault();
    try {
      const response = await axios.put(`/cards/${id}`, inputsData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        navigate(ROUTES.HOME);
      } else {
        console.error('Error updating the card: ', response);
      }
    } catch (error) {
      console.error('Error during the card update: ', error);
    }
  };

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
        Edit your card
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 6 }}>
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
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={Object.keys(errors).length > 0}
        >
          Edit
        </ButtonComponent>
      </Box>
    </Box>
  );
};
export default EditCardPage;
