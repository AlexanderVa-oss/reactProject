// LikedCardsPage.jsx
import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardComponent from '../../components/CardComponent';
import { CardsContext } from '../../store/searchContext';
import LoginContext from '../../store/loginContext';

const LikedCardsPage = () => {
    const { dataFromServer } = useContext(CardsContext);
    const { login } = useContext(LoginContext);

    const likedCards = dataFromServer.filter(card => card.likes.includes(login?._id));

    return (
        <div>
            <Typography variant="h4" gutterBottom>Liked Cards</Typography>
            {likedCards.length > 0 ? (
                <Grid container spacing={2}>
                    {likedCards.map((card, index) => (
                        <Grid item key={index}>
                            <CardComponent {...card} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <Typography>No liked cards found.</Typography>
            )}
        </div>
    );
};

export default LikedCardsPage;
