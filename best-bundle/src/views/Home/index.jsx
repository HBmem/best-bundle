import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

const options = [
    {
        id: 1,
        name: "Build Bundle",
        image: "",
        link: "/find-best-bundle",
        description: "Find the best bundle of streaming services for your budget.",
    },
    {
        id: 2,
        name: "Where to Watch",
        image: "",
        link: "/where-to-watch",
        description: "Discover where to watch your favorite movies, TV shows, and documentaries.",
    },
];

function Home() {
    let navigate = useNavigate();

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
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        marginTop: 4,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}
                >
                    {options.map((option) => (
                        <Card
                            key={option.id}
                        >
                            <CardActionArea
                                onClick={() => navigate(option.link)}
                                sx={{
                                    textAlign: 'center',
                                    padding: 3,
                                    width: '250px',
                                    height: '100%',
                                }}
                            >
                                <Typography variant="h6" component="div">
                                    {option.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {option.description}
                                </Typography>
                            </CardActionArea>
                        </Card>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default Home;