// Header.js
import React, { useContext } from 'react';
import { Drawer, IconButton, List, ListItem, ListItemText, Grid, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import LoginContext from '../../store/loginContext';
import Links from './Links';
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import { alwaysLinks } from './myLink';
import "./ui/headerStyle.css"
import { Button } from '@mui/material';

const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const { login, setLogin } = useContext(LoginContext);

    const getButtonLabel = () => {
        if (!login) return "Not Logged In";
        if (login.isAdmin) return "Admin Panel";
        if (login.isBusiness) return "Business Dashboard";
        return "User Profile";
    };

    const handleLogout = () => {
        setLogin(null);
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
    };

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    return (
        <Grid className="header" container>

            <Grid container sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center' }}>
                <Button variant="h6" sx={{ display: 'inline' }}>
                    {getButtonLabel()}
                </Button>
                <Button
                    color="inherit"
                    aria-label="login status"
                >
                    {login ? <AccountCircleIcon /> : <LockIcon />}
                </Button>
                <Button variant="h6" sx={{ display: 'inline' }} onClick={handleLogout}>
                    {login ? "Log out" : "Not Logged"}
                </Button>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant="h3"
                    sx={{
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem', 
                            md: '3rem', 
                            lg: '3.5rem', 
                            xl: '4rem'
                        }
                    }}
                >
                    Alexander Kukushkin
                </Typography>
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://www.codewars.com/users/AlexanderVa-oss/badges/large" alt="Code War LVL" />
            </Grid>

            <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography component="span" className="navigation">
                    <Links />
                </Typography>
            </Grid>

            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                sx={{
                    display: { md: 'none' },
                    left: 10,
                    top: 10,
                }}
            >
                <MenuIcon fontSize="large" />
            </IconButton>


            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <List>
                    {alwaysLinks.map((link) => (
                        <ListItem key={link.to} onClick={toggleDrawer} component={NavLink} to={link.to}>
                            <ListItemText primary={link.children} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Grid>
    );
};

export default Header;
