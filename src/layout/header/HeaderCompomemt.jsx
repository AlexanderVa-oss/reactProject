// Header.js
import React from 'react';
import './ui/headerStyle.css';
import Links from './Links';
import { Box } from "@mui/material";

const Header = () => {
    return (
        <Box className="header">
            <div className="logo">
                Alexander Kukushkin
            </div>
            <img src="https://www.codewars.com/users/AlexanderVa-oss/badges/large" alt="Code War LVL" />
            <nav className="navigation">
                <Links />
            </nav>
        </Box>
    );
};

export default Header;
