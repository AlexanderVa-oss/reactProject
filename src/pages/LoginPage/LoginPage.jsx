import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import CopyrightComponent from "./ui/CopyrightComponent";
import { red } from '@mui/material/colors';
import ButtonComponent from "../../components/ButtonComponent";
import LoginContext from '../../store/loginContext'
import { jwtDecode } from "jwt-decode";

import ROUTES from "../../routes/ROUTES";
import axios from "axios";

const LoginPage = () => {
  const LoginImage = '/assets/images/alchemyrefiner_alchemymagic_1_22d89031-3379-47a7-aadc-10ac51303a4b_0.jpg';

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const { setLogin } = useContext(LoginContext);


  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passwordValue,
      });
      localStorage.setItem("token", data);
      const userInfoFromToken = jwtDecode(data);
      
      console.log(userInfoFromToken);

      setLogin(userInfoFromToken);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log("err from axios", err.message);
      setLogin(null);
      localStorage.clear();
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${LoginImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: red[400] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={emailValue}
              onChange={handleEmailChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={passwordValue}
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <ButtonComponent>
              Sign In
            </ButtonComponent>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?<br /> "Thats your problem!" <br /> I can't help you!!!
                </Link>
              </Grid>

              <Grid item>
                <Link to={ROUTES.REGISTER}>
                  {"Register now"}
                </Link>
              </Grid>
            </Grid>

            <Grid item xs m={5}>
              <Typography href="#" variant="body2">
                {"Don't have an account?"}<br />
                {'This Is Admin Accaount:'}<br />
                email: admin@gmail.com<br/>
                password: Abc!123Abc
              </Typography>
            </Grid>
            <CopyrightComponent sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default LoginPage;
