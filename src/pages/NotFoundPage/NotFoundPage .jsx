import React from 'react';
import './NotFoundPage .css';

const NotFoundPage = () => {
return(
    <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-text">Page Not Found</p>
        <p className="not-found-description">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/" className="not-found-home-link">Go to Homepage</a>
    </div>
)
};

export default NotFoundPage;