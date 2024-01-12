import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateNewCard from "../pages/CreateNewCard/CreateNewCard";

import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.CREATECARD} element={<CreateNewCard />} />
            <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default Router