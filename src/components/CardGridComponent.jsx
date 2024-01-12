import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardComponent from "./CardComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";


const CardGridComponent = () => {
        const [dataFromServer, setDataFromServer] = useState([]);
        const navigate = useNavigate();
        useEffect(() => {
            axios
                .get("/cards")
                .then(({ data }) => {
                    setDataFromServer(data);
                })
                .catch((err) => {
                    console.log("error from axios", err);
                });
        }, []);
        if (!dataFromServer || !dataFromServer.length) {
            return <Typography>Could not find any items</Typography>;
        }
        const handleDeleteCard = (id) => {
            setDataFromServer((currentDataFromServer) =>
                currentDataFromServer.filter((card) => card._id !== id)
            );
        };

        const handleEditCard = (_id) => {
            navigate(`${ROUTES.EDITCARD}/${_id}`);
        };

    return (
        <Grid container spacing={2} >
            {dataFromServer.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12} display={'grid'} justifyItems={'center'} key={"carsCard" + index}>
                    <CardComponent
                        id={item._id}
                        title={item.title}
                        subtitle={item.subtitle}
                        img={item.image.url}
                        phone={item.phone}
                        address={item.address}
                        cardNumber={item.bizNumber}
                    onDelete={handleDeleteCard}
                    onEdit={handleEditCard}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGridComponent;