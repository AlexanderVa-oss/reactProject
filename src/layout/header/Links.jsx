// Links.jsx
import { Box } from "@mui/material";
import {
    alwaysLinks,
    loggedInLinks,
    loggedOutLinks,
    bizLinks,
    adminLinks
} from "./myLink";
import { useContext } from "react";
import NavLinkComponent from "./NavLinkComponent";
import LoginContext from "../../store/loginContext";

const Links = () => {
    const { login } = useContext(LoginContext);
    const loggedIn = login;
    return (
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {alwaysLinks.map((link) => (
                <NavLinkComponent to={link.to} key={link.to} sx={{ my: 1 }}>
                    {link.children}
                </NavLinkComponent>
            ))}
            {loggedIn && !login.isBusiness &&
                loggedInLinks.map((myItem, index) => (
                    <NavLinkComponent to={myItem.to} key={"linksnav1" + index}>
                        {myItem.children}
                    </NavLinkComponent>
                ))}
            {!loggedIn &&
                loggedOutLinks.map((myItem, index) => (
                    <NavLinkComponent to={myItem.to} key={"linksnav2" + index}>
                        {myItem.children}
                    </NavLinkComponent>
                ))}
            {loggedIn &&
                loggedIn.isBusiness &&
                bizLinks.map((myItem, index) => (
                    <NavLinkComponent to={myItem.to} key={"linksnav3" + index}>
                        {myItem.children}
                    </NavLinkComponent>
                ))}
            {loggedIn &&
                loggedIn.isAdmin &&
                adminLinks.map((myItem, index) => (
                    <NavLinkComponent to={myItem.to} key={"linksnav4" + index}>
                        {myItem.children}
                    </NavLinkComponent>
                ))}
        </Box>
    );
};

export default Links;