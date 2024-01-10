import { Box } from "@mui/material";
import { alwaysLinks } from "./myLink";
import NavLinkComponent from "./NavLinkComponent";

const Links = () => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
            {alwaysLinks.map((link) => (
                <NavLinkComponent to={link.to} key={link.to} sx={{ my: 1 }}>
                    {link.children}
                </NavLinkComponent>
            ))}
        </Box>
    );
};

export default Links;