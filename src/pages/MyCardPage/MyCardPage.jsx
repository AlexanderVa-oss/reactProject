//CardGridComponent.jsx
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "../../components/CardComponent";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/ROUTES";
import { CardsContext } from "../../store/searchContext";
import React from "react";
import axios from "axios";
import likedCards from "../../services/myCardHelper";
import LoginContext from "../../store/loginContext";

const CardGridComponent = () => {
    const { dataFromServer, setDataFromServer } = useContext(CardsContext);
    const navigate = useNavigate();
    const { login } = useContext(LoginContext);

    if (!dataFromServer || !dataFromServer.length) {
        return <Typography>Could not find any items</Typography>;
    }

    const dataFromServerFiltered = likedCards(
        dataFromServer,
        login ? login._id : undefined
    );

    const handleDeleteCard = (id) => {
        setDataFromServer((currentDataFromServer) =>
            currentDataFromServer.filter((card) => card._id !== id)
        );
    };

    const handleEditCard = (_id) => {
        navigate(`${ROUTES.EDITCARD}/${_id}`);
    };

    const handleCardClick = (_id) => {
        navigate(`${ROUTES.CARD}/${_id}`);
    };

    const handleLikeCard = async (id) => {
        try {
            let { data } = await axios.patch("/cards/" + id);
            setDataFromServer((cDataFromServer) => {
                let cardIndex = cDataFromServer.findIndex((card) => card._id === id);
                if (cardIndex >= 0) {
                    cDataFromServer[cardIndex] = data;
                }
                return [...cDataFromServer];
            });
        } catch (err) {
            console.log("error from axios (like)", err);
        }
    };

    return (
        <Grid container spacing={2} >
            {dataFromServerFiltered.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12} display={'grid'} justifyItems={'center'} key={"Card" + index}>
                    <CardComponent
                        userId={item.user_id}
                        id={item._id}
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.image.url}
                        phone={item.phone}
                        address={item.address}
                        cardNumber={item.bizNumber}
                        onDelete={handleDeleteCard}
                        onEdit={handleEditCard}
                        onClick={handleCardClick}
                        liked={handleLikeCard}
                        isLiked={item.liked}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGridComponent;