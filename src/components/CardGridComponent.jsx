import Grid from "@mui/material/Grid";
import CardComponent from "./CardComponent";

let initialDataFromServer = [
    {
        id: "sdlfkjgn0",
        title: "title1",
        subtitle: "subtitle1",
        body: "body1",
        img: "/assets/imgs/car 1.jpg",
    },
    {
        id: "sdlfkjgn1",
        title: "title2",
        subtitle: "subtitle2",
        body: "body2",
        img: "/assets/imgs/car 2.jpg",
    },
    {
        id: "sdlfkjgn2",
        title: "title3",
        subtitle: "subtitle3",
        body: "body3",
        img: "/assets/imgs/car 3.jpg",
    },
    {
        id: "sdlfkjgn3",
        title: "title4",
        subtitle: "subtitle4",
        body: "body4",
        img: "/assets/imgs/car 4.jpg",
    },
    {
        id: "sdlfkjgn4",
        title: "title5",
        subtitle: "subtitle5",
        body: "body5",
        img: "/assets/imgs/car 5.png",
    },
];

const CardGridComponent = () => {

    return (
        <Grid container spacing={2} >
            {initialDataFromServer.map((item, index) => (
                <Grid item lg={3} md={6} xs={6} display={'grid'} justifyItems={'center'} key={"carsCard" + index}>
                    <CardComponent
                        id={item.id}
                        title={item.title}
                        subtitle={item.subtitle}
                        // img={item.image.url}
                        // phone={item.phone}
                        // address={item.address}
                        // cardNumber={item.bizNumber}
                    // onDelete={handleDeleteCard}
                    // onEdit={handleEditCard}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default CardGridComponent;