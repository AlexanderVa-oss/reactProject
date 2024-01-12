//NavLinkComponent.jsx
import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const NavLinkComponent = ({ to, children }) => {
    return (
        <NavLink to={to} style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none'
        })}>
            <Typography sx={{ p: 2, color: 'inherit', variant: 'h6' }}>
                {children}
            </Typography>
        </NavLink>
    );
};

export default NavLinkComponent;
