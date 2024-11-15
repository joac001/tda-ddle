'use client'

import { createContext, useMemo, useState, useContext, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Theme from '@/../theme';

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const useColorMode = () => useContext(ColorModeContext);

const getInitialMode = () => {
    const savedMode = cache.get('theme');
    return savedMode ? JSON.parse(savedMode) : 'light';
};

const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                const newMode = mode === 'dark' ? 'light' : 'dark';
                setMode(newMode);
                { /*cache.set('theme', JSON.stringify(newMode));*/ }
            },
        }),
        [mode],
    );

    const theme = useMemo(() => Theme, [mode],);

    {/*useEffect(() => {
        const savedMode = cache.get('theme');
        if (savedMode) {
            setMode(JSON.parse(savedMode));
        }
    }, []); */}

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ColorModeProvider;
