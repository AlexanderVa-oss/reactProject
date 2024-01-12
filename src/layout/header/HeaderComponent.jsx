// Header.js
import React from 'react';
import './ui/headerStyle.css';
import Links from './Links';
import { Box, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { alwaysLinks } from './myLink'; 
import { NavLink } from "react-router-dom";



const Header = () => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };
    return (
        <Box className="header">
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={toggleDrawer}
                sx={{ display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>

            <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={toggleDrawer}
            >
                <List>
                    {alwaysLinks.map((link) => (
                        <ListItem button key={link.to} onClick={toggleDrawer} component={NavLink} to={link.to}>
                            <ListItemText primary={link.children} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <Box className="header">
                <div className="logo">
                    Alexander Kukushkin
                </div>
                <img src="https://www.codewars.com/users/AlexanderVa-oss/badges/large" alt="Code War LVL" />
                <nav className="navigation">
                    <Links />
                </nav>
            </Box>
        </Box>
    );
};

export default Header;
