import ROUTES from "../../routes/ROUTES";

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home" },
    { to: ROUTES.ABOUTUS, children: "About Us" },
];

const loggedInLinks = [
    // { to: "/profile", children: "Profile page" },
    { to: ROUTES.REGISTER, children: "Register page" },
];

const loggedOutLinks = [
    { to: ROUTES.LOGIN, children: "Login page" },
];

const bizLinks = [
    { to: ROUTES.CREATECARD, children: "Create Card" }
];

const adminLinks = [
    { to: ROUTES.LOGIN, children: "Login page" },
];
export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks, adminLinks };