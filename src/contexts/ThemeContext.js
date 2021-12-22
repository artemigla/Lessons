import React, { createContext, useState } from 'react';
import { darkColor, lightColor } from '../components/ColorsTheme/ColorsTheme';
import PropTypes from 'prop-types';

const customTheme = {
    dark: false,
    theme: lightColor,
    toggle: () => { }
}

const ThemeContext = createContext(customTheme);

function ThemeProvider({ children }) {
    const [dark, setIsDark] = useState(false);

    const toggle = () => {
        setIsDark(!dark);
    };

    const theme = dark ? darkColor : lightColor;

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider, ThemeContext }

ThemeProvider.propTypes = {
    children: PropTypes.object
}