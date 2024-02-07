import { Routes, Route } from "react-router-dom";
import ROUTES from "./ROUTES";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import EditCardPage from "../pages/EditCardPage/EditCardPage";
import CreateNewCard from "../pages/CreateNewCard/CreateNewCard";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import CardPageComponent from "../pages/CardPage/CardPageComponent";
import MyCardPage from "../pages/MyCardPage/MyCardPage";
import MyLikedPage from "../pages/MyFavoriteCards/FavoriteCardsPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage ";
import UpdateUser from "../pages/updateUserPage/updateUserPage"
import AuthGuard from "../guard/AuthGuard"
import BizGuard from "../guard/BizGuard"


const Router = () => {
    return (
        <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.ABOUTUS} element={<AboutUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path={`${ROUTES.CARD}/:id`} element={<CardPageComponent /> } />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

            <Route path={ROUTES.LIKEDCARDS} element={<AuthGuard> <MyLikedPage /> </AuthGuard>} />
            <Route path={ROUTES.USERUPDATE} element={<AuthGuard>   <UpdateUser /> </AuthGuard>} />

            <Route path={ROUTES.CREATECARD} element={<BizGuard> <CreateNewCard />  </BizGuard>} />
            <Route path={`${ROUTES.EDITCARD}/:id`} element={<BizGuard> <EditCardPage />  </BizGuard>} />
            <Route path={ROUTES.MYCARDS} element={<BizGuard> <MyCardPage />  </BizGuard>} />
        </Routes>
    );
};

export default Router