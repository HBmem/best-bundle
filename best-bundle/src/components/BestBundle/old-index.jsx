import React from "react";

import bundles from "../../data/budles.json";

import SelectedCard from "../SelectedCard";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

function BestBundle(props) {
    const { selections } = props;
    const [ foundBestBundle, setFoundBestBundle ] = React.useState(false);

    // Find Best Bundle
    function findBestBundleCombination(requiredServices, bundles) {
        // let combos = []; // Stores the best combination of bundles
        // let cheapestIndex = -1; // Stores the index of the cheapest bundle
        let bestCombo = [];
        let minCost = Infinity;
        
        const requiredServiceSet = new Set(requiredServices);

        function isCovered(coveredSet) {
            for (const item of requiredServiceSet) {
                if (!coveredSet.has(item)) {
                    return false;
                }
            }
            return true;
        }

        function backtrack(index, currentSet, currentCost, CurrentCombo) {
            if (isCovered(currentSet)) {
                if (currentCost < minCost) {
                    minCost = currentCost;
                    bestCombo = [...CurrentCombo];
                }
                return;
            }

            if (index >= bundles.length || currentCost >= minCost) return;

            const newSet = new Set(currentSet);
            for (const item of bundles[index].items) {
                newSet.add(item);
            }
            backtrack(
                index + 1,
                newSet,
                currentCost + bundles[index].price,
                [...CurrentCombo, bundles[index]]
            );

            backtrack(index + 1, currentSet, currentCost, CurrentCombo);
        }

        backtrack(0, new Set(), 0, []);
        return {minCost, bestCombo};
    }

    // Render
    function renderSelectedServices() {
        if (selections.length > 0) {
            return (
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        width: '100%',
                        maxWidth: "500px",
                        padding: 2,
                        bgcolor: 'grey.900',
                        borderRadius: 2,
                        marginBottom: 4,
                    }}
                >
                    {selections.map((service) => (
                        <Grid item key={service.id} xs={6} sm={4} md={3}>
                            <SelectedCard
                                streamingService={service}
                                handleServiceClick={() => {}}
                            />
                        </Grid>
                    ))} 
                </Grid>
            )
        }
    }

    function renderBundles() {
        if (foundBestBundle === false) {
            return (
                <Container
                    sx={{
                        display: "grid",
                        gap: 2,
                        padding: 2,
                        justifyContent: "center",
                        minHeight: "100vh",
                    }}
                >
                    <CircularProgress size={100} sx={{margin: "auto"}}/>
                </Container>
            )
        }
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
                    marginTop: "100px", // Adjust for fixed navbar height
                }}
            >
                {renderSelectedServices()}

                {renderBundles()}
            </Box>
        </Box>
    )
}

export default BestBundle;