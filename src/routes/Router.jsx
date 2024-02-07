import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateNewCard from "../pages/CreateNewCard/CreateNewCard";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import Sandbox from "../sandBox/SandBox";
import CardPageComponent from "../pages/CardPage/CardPageComponent";
import MyCardPage from "../pages/MyCardPage/MyCardPage";
import MyLikedPage from "../pages/MyFavoriteCards/FavoriteCardsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";
import UpdateUser from "../pages/updateUserPage/updateUserPage"


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
            <Route path={ROUTES.CREATECARD} element={<CreateNewCard />} />
            <Route path={`${ROUTES.EDITCARD}/:id`} element={<EditCardPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
            <Route path={ROUTES.SANDBOX} element={<Sandbox />} />
            <Route path={`${ROUTES.CARD}/:id`} element={<CardPageComponent />} />
            <Route path={ROUTES.MYCARDS} element={<MyCardPage />} />
            <Route path={ROUTES.LIKEDCARDS} element={<MyLikedPage />} />
            <Route path={ROUTES.USERUPDATE} element={<UpdateUser />} />
        </Routes>
    );
};

export default Router