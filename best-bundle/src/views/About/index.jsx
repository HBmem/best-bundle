import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function About() {
    return (
        <Box>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                }}
            >
                <Stack
                    spacing={2}
                    sx={{
                        textAlign: 'center',
                        maxWidth: '600px',
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{ fontSize: '3rem', fontWeight: 'bold' }}
                    >
                        About
                    </Typography>
                    <Typography variant="body1">
                        At Best Bundle, we know how overwhelming it can be to keep track of your favorite TV shows, movies, and documentaries across countless streaming platforms. As streaming options multiply, so do the challenges—and the costs—of staying connected to the content you love.
                    </Typography>
                    <Typography variant="body1">
                        That's why we set out to create a smarter solution. Our service empowers you to easily discover where your favorite titles are available and helps you compare streaming bundles, so you can get the most value for your money. We're passionate about simplifying your streaming experience, making sure you spend less time searching and more time watching what you love.
                    </Typography>
                    <Typography variant="body1">
                        Welcome to a new way to stream smarter, not harder.
                    </Typography>
                </Stack>
            </Container>
            <Box sx={{ textAlign: 'center', padding: 2 }}>
                <Typography variant="body2" color="textSecondary">
                    © {new Date().getFullYear()} Best Bundle. All rights reserved.
                </Typography>
            </Box>
        </Box>
    );
}

export default About;