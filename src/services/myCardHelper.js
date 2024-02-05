const userCreatedCards = (cards, myId) => {
    if (!cards) return null;

    const filteredCards = cards.filter(card => card.user_id === myId);

    const newCards = filteredCards.map(card => ({
        ...card,
        liked: card.likes.includes(myId), 
    }));

    return newCards;
};

export default userCreatedCards;
