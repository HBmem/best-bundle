import React from "react";

import servicesUS from "../../data/servicesUS";

import StreamingCard from "../StreamingCard";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import SelectedCard from "../SelectedCard";
import Grid from "@mui/material/Grid";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function ServicesSelect(props) {
    const { region, handleSelectionComplete } = props;
    const [selectedServices, setSelectedServices] = React.useState([]);

    const actions = [
        {
            name: 'Clear Selection',
            icon: <CancelIcon />,
            onClick: () => {
                setSelectedServices([]);
            }
        },
        {
            name: 'Find Best Bundle',
            icon: <CheckCircleIcon />,
            onClick: () => {
                let selections = [];
                if (region.id === 1) { // US
                    selectedServices.forEach(service => {
                        selections.push(servicesUS[service - 1])
                    });
                } else {
                    // TODO: inform user of error
                }
                
                handleSelectionComplete(selections);
            }
    
        }
    ];

    function handleServiceClick(service) {
        if (selectedServices.includes(service.id)) {
            setSelectedServices(selectedServices.filter(id => id !== service.id));
        } else {
            setSelectedServices([...selectedServices, service.id]);
        }
    }

    function renderCards() {
        if (region.id === 1) {
            return (
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
                    {servicesUS.map((service) => (
                        <StreamingCard
                            key={service.id}
                            streamingService={service}
                            selectedServices={selectedServices}
                            handleServiceClick={handleServiceClick}
                        />
                    ))}
                </Container>
            )
        } else {
            return (
                <Typography variant="body1" sx={{ textAlign: 'center', padding: 2 }}>
                    Services for {region.name} are not available yet.
                </Typography>
            );
        }
    }

    function renderSelectedServices() {
        if (selectedServices.length === 0) {
            return (
                <Skeleton
                    variant="rounded"
                    sx={{
                        maxWidth: '500px',
                        width: '100%',
                        minHeight: '100px',
                        maxHeight: '100px',
                        marginBottom: 4,
                    }}
                />
            )
        } else {
            return (
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                        maxWidth: '500px',
                        padding: 2,
                        bgcolor: 'grey.900',
                        borderRadius: 2,
                        marginBottom: 4,
                    }}
                >
                    {selectedServices.map((serviceId) => (
                        <Grid item key={serviceId} xs={6} sm={4} md={3}>
                            <SelectedCard
                                streamingService={servicesUS.find(service => service.id === serviceId)}
                                handleServiceClick={handleServiceClick}
                            />
                        </Grid>
                    ))}
                </Grid>

            )
        }
    }

    function renderSpeedDial() {
        if (selectedServices.length > 0) {
            return (
                <SpeedDial
                    ariaLabel="Action SpeedDial"
                    sx={{ position: 'fixed', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={action.onClick}
                            sx={{
                                backgroundColor: "green"
                            }}
                        />
                    ))}
                </SpeedDial>
            );
        }
        return null;
    }
    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    marginTop: "64px", // Adjust for fixed navbar height
                }}
            >
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        marginBottom: 4,
                    }}
                >
                    <Typography variant="h1" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
                        Select Services for {region.name}
                    </Typography>
                    <Typography variant="body1" mt={2}>
                        Choose the streaming services you want to include in your bundle for {region.name}.
                    </Typography>
                </Box>

                {renderSelectedServices()}                

                {renderCards()}

                {renderSpeedDial()}
            </Box>
        </Box>
    );
}

export default ServicesSelect;