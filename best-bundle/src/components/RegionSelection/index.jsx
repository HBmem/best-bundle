import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

const regions = [
    { 
        id: 1,
        name: 'North America',
        description: 'Includes the United States, Canada, and Mexico.',
    },
    {
        id: 2,
        name: 'Europe',
        description: 'Includes countries like the UK, Germany, France, and more.',
    },
    {
        id: 3,
        name: 'Asia',
        description: 'Includes countries like Japan, South Korea, India, and more.',
    },
    {
        id: 4,
        name: 'Australia',
        description: 'Covers the Australian continent and surrounding islands.',
    },
    {
        id: 5,
        name: 'South America',
        description: 'Includes Brazil, Argentina, Chile, and other South American countries.',
    },
    {
        id: 6,
        name: 'Africa',
        description: 'Includes countries across the African continent.',
    },
]

function RegionSelection() {
    const [selectedRegion, setSelectedRegion] = React.useState(0);

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

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
                        Select Your Region
                    </Typography>
                    <Typography variant="body1">
                        Choose your region to find the best streaming bundles available in your area.
                    </Typography>
                </Stack>
            </Container>

            <Container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                    gap: 2,
                    padding: 2,
                    maxWidth: '800px',
                }}
            >
                {regions.map((region) => (
                    <Card>
                        <CardActionArea
                            onClick={() => handleRegionChange({ target: { value: region.id } })}
                            sx={{
                                backgroundColor: selectedRegion === region.id ? '#E50914' : 'inherit',
                                color: selectedRegion === region.id ? '#fff' : 'inherit',
                                textAlign: 'center',
                                padding: 2,
                            }}
                        >
                            <Typography variant="h6" component="div">
                                {region.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {region.description}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))}
            </Container>
        </Box>
    );
}

export default RegionSelection;