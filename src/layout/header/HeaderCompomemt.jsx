// Header.js
import React from 'react';
import './ui/headerStyle.css'; 

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                Alexander Kukushkin
            </div>
            <img src="https://www.codewars.com/users/AlexanderVa-oss/badges/large" alt="Code War LVL" />
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/about">About me</a>
                <a href="/contact">Contacts</a>
            </nav>
        </header>
    );
};

export default Header;
