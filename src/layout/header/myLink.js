import ROUTES from "../../routes/ROUTES";

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home" },
    { to: ROUTES.ABOUTUS, children: "About Us" },
];

const loggedOutLinks = [
    { to: ROUTES.LOGIN, children: "Login page" },
];

const loggedInLinks = [
    { to: ROUTES.REGISTER, children: "Register page" },
    { to: ROUTES.LIKEDCARDS, children: "Liked Cards" },
    { to: ROUTES.USERUPDATE, children: "Update Information" },  
];

const bizLinks = [
    { to: ROUTES.CREATECARD, children: "Create Card" },
    { to: ROUTES.MYCARDS, children: "My Cards" },
    { to: ROUTES.LIKEDCARDS, children: "Liked Cards" },
    { to: ROUTES.USERUPDATE, children: "Update Information" }, 

];

const adminLinks = [
    { to: ROUTES.LIKEDCARDS, children: "Liked Cards" },
    { to: ROUTES.LOGIN, children: "Login page" },
];
export { alwaysLinks, loggedInLinks, loggedOutLinks, bizLinks, adminLinks };