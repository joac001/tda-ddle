import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4caf50', // Forest green
            light: '#80e27e', // Light green for hover effects
            dark: '#087f23', // Deep green for contrast
            contrastText: '#ffffff', // White text for readability
        },
        secondary: {
            main: '#f9a825', // Golden yellow for vibrancy
            light: '#ffd95b', // Light amber for hover effects
            dark: '#c17900', // Deep amber for contrast
            contrastText: '#000000', // Black text for legibility
        },
        background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e', // Slightly lighter background
        },
        text: {
            primary: '#ffffff', // Main text
            secondary: '#b0b0b0', // Subtle gray for secondary text
        },
    },
});

export default theme;
