// SearchSection.jsx
import React, { useState, useContext } from 'react';
import { TextField, Grid } from '@mui/material';
import ButtonComponent from '../../../components/ButtonComponent';
import { CardsContext } from '../../../store/searchContext';
import  TextInputComponentAll  from '../../../components/TextInputComponentAll';

const SearchSection = ({ onSearch }) => {
    const { dataFromServer, handleSearchResults } = useContext(CardsContext);
    const [titleSearch, setTitleSearch] = useState('');
    const [phoneSearch, setPhoneSearch] = useState('');
    const [addressSearch, setAddressSearch] = useState('');

    const handleSearch = () => {

        const titleFiltered = titleSearch
            ? dataFromServer.filter(item => item.title.includes(titleSearch))
            : [];

        const phoneFiltered = phoneSearch
            ? dataFromServer.filter(item => item.phone.includes(phoneSearch))
            : [];

        const addressFiltered = addressSearch
            ? dataFromServer.filter(item => item.address.city.includes(addressSearch))
            : [];

        const combinedFiltered = [...new Set([...titleFiltered, ...phoneFiltered, ...addressFiltered])];

        const restData = dataFromServer.filter(item => {
            return !(titleSearch ? item.title.includes(titleSearch) : false) &&
                !(phoneSearch ? item.phone.includes(phoneSearch) : false) &&
                !(addressSearch ? item.address.city.includes(addressSearch) : false);
        });

        const combinedData = [...combinedFiltered, ...restData];

        handleSearchResults(combinedData);
    };

    return (
        <Grid className='searchBackgraund' container justifyContent="space-between">
            <TextInputComponentAll
                label="Title"
                value={titleSearch}
                onChange={(e) => setTitleSearch(e.target.value)}
            />
            <TextInputComponentAll
                label="Phone"
                value={phoneSearch}
                onChange={(e) => setPhoneSearch(e.target.value)}
            />
            <TextInputComponentAll
                label="Address"
                value={addressSearch}
                onChange={(e) => setAddressSearch(e.target.value)}
            />
            <Grid container sx={{
                margin: 2,
            }}>
                <ButtonComponent onClick={handleSearch}>Search</ButtonComponent>
            </Grid>
        </Grid>
    );
};

export default SearchSection;
