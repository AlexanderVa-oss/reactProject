const getLikedCardsByUser = (cards, myId) => {
    if (!cards) return null;

    const likedCards = cards.filter(card => card.likes.includes(myId));

    const newCards = likedCards.map(card => ({
        ...card,
        liked: card.likes.includes(myId),
    }));

    return newCards;
};

export default getLikedCardsByUser;
