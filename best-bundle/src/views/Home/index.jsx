import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function Home() {
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
                    <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Welcome to Best Bundle
                    </Typography>
                    <Typography variant="body1">
                    Best Bundle helps you find the best streaming bundles for your budget and shows you where to watch your favourite movies, TV shows, or documentaries.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}

export default Home;