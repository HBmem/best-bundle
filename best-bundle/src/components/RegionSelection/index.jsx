import React from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";

function RegionSelection(props) {
    const { regions, selectedRegion, handleRegionChange } = props;

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
                    <Container
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr', // 1 column for small screens
                                sm: 'repeat(auto-fill, minmax(250px, 1fr))', // multiple columns for larger screens
                            },
                            gap: 2,
                            padding: 2,
                            maxWidth: '800px',
                        }}
                    >
                        {regions.map((region) => (
                            <Card key={region.id}>
                                <CardActionArea
                                    onClick={() => handleRegionChange({ target: { value: region.id } })}
                                    sx={{
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
                </Stack>
            </Container>
        </Box>
    );
}

export default RegionSelection;