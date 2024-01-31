import React from 'react';

const GoogleMap = ({ city, street, houseNumber }) => {

    const embedUrl = `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(city)}%20${encodeURIComponent(street)}%20${encodeURIComponent(houseNumber)}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

    return (
        <div style={{ width: "100%" }}>
            <iframe
                title="Google Map"
                width="100%"
                height="450"
                src={embedUrl}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default GoogleMap;
