import ROUTES from "../../routes/ROUTES";

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home" },
    { to: ROUTES.ABOUTUS, children: "About Us" },
];

const loggedInLinks = [
    // { to: "/profile", children: "Profile page" },
    { to: ROUTES.CREATECARD, children: "Create Card" },
];

const loggedOutLinks = [
    { to: ROUTES.REGISTER, children: "Register page" },
    { to: ROUTES.LOGIN, children: "Login page" },
];
export { alwaysLinks, loggedInLinks, loggedOutLinks };