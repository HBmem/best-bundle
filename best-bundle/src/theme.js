import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#E50914", // Netflix Red
        },
        secondary: {
            main: "#1DB954", // Spotify Green
        },
        background: {
        default: "#121212", // Dark background
        paper: "#1E1E1E", // Slightly lighter paper background
        },
        text: {
        primary: "#FFFFFF", // White text for better contrast
        secondary: "#aaaaaa", // Light gray for secondary text
        },
    },
    typography: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
        },
        h6: {
            color: '#E50914', // Netflix Red for headings
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    textTransform: "none",
                },
            },
        },
    },
});

export default theme;
