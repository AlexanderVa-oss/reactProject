import ROUTES from "../../routes/ROUTES";

const alwaysLinks = [
    { to: ROUTES.HOME, children: "Home" },
    { to: ROUTES.LOGIN, children: "login" },
    { to: ROUTES.REGISTER, children: "Register" },
    { to: ROUTES.CREATECARD, children: "Create Card" },
];
export { alwaysLinks};