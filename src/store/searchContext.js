// searchContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CardsContext = createContext();

export const CardsProvider = ({ children }) => {
    const [dataFromServer, setDataFromServer] = useState([]);

    useEffect(() => {
        axios.get("/cards")
            .then(response => {
                setDataFromServer(response.data);
            })
            .catch(error => {
                console.error("Error from axios:", error);
            });
    }, []);

    const handleSearchResults = (filteredData) => {
        setDataFromServer(filteredData);
    };

    return (
        <CardsContext.Provider value={{ dataFromServer, setDataFromServer, handleSearchResults }}>
            {children}
        </CardsContext.Provider>
    );
};
