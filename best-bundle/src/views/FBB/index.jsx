import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import RegionSelection from "../../components/RegionSelection";

function FBB() {
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
                        Find Best Bundle
                    </Typography>
                    <Typography variant="body1">
                        Let's find the best bundle of streaming services to make sure that you can always watch your favorite movies, TV shows, and documentaries.
                    </Typography>
                </Stack>
            </Container>
            
            <RegionSelection />
        </Box>
    )
}

export default FBB;