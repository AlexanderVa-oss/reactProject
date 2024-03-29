// SearchSection.jsx
import React, { useState, useContext } from 'react';
import { Grid } from '@mui/material';
import ButtonComponent from '../../../components/ButtonComponent';
import { CardsContext } from '../../../store/searchContext';
import TextInputComponentAll from '../../../components/TextInputComponentAll';

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
        <Grid container spacing={2} className='searchBackgraund'>
            <Grid item xs={11} sm={4}>
                <TextInputComponentAll
                    label="Title"
                    value={titleSearch}
                    onChange={(e) => setTitleSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={11} sm={4}>
                <TextInputComponentAll
                    label="Phone"
                    value={phoneSearch}
                    onChange={(e) => setPhoneSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={11} sm={4}>
                <TextInputComponentAll
                    label="Address"
                    value={addressSearch}
                    onChange={(e) => setAddressSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={12} sx={{
                margin: 2,
            }}>
                <ButtonComponent onClick={handleSearch}>Search</ButtonComponent>
            </Grid>
        </Grid>
    );
};

export default SearchSection;
