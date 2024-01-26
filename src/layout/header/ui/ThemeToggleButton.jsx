// ThemeToggleButton.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../../../store/themeContext';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <label className="theme-toggle-button">
            <span className="slider round">Mode dark/light</span>
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        </label>
    );
};

export default ThemeToggleButton;
