import React from "react";

import bundles from "../../data/bundles.json";
// import servicesUS from "../../data/servicesUS";

import SelectedCard from "../SelectedCard";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

// function findCombinations(requiredServices) {
//     const results = [];
//     const n = bundles.length;
//     let cheapest = Infinity;

//     const sortedBundles = [...bundles].sort((a, b) => a.price - b.price);
    
//     function backtrack(start, currentCombo, currentSet, currentCost) {
//         if (currentCost > minPrice) {
//             return; // Prune branches that exceed the minimum price found
//         }

//         // Check if all required services are covered
//         const allCovered = requiredServices.every((service) =>
//             currentSet.has(service.name)
//     );

//         if (allCovered) {
//             results.push({
//                 combo: [...currentCombo],
//                 cost: currentCost });
//             minPrice = Math.min(minPrice, currentCost); // Update best price
//             return; // Found a valid combination
//         }
        
//         for (let i = start; i < n; i++) {
//             const bundle = sortedBundles[i];
//             const newSet = new Set(currentSet);
//             bundle.services.forEach((service) => newSet.add(service));

//             if ([...bundle.services].every(s => currentSet.has(s))) {
//                 continue; // Skip if bundle adds no new services
//             }

//             // Choose the bundle
//             currentCombo.push(bundle);
//             backtrack(i + 1, currentCombo, newSet, currentCost + bundle.price);
//             // Backtrack: remove the last added bundle
//             currentCombo.pop();
//         }
//     }

//     backtrack(0, [], new Set(), 0);

//     // Sort results by total price
//     results.sort((a, b) => a.cost - b.cost);
//     return results;
// }

function findCombinations(requiredServices) {
    let cheapestPrice = Infinity;
    const validCombinations = [];

    // Sort bundles by price for better pruning
    const sortedBundles = [...bundles].sort((a, b) => a.price - b.price);

    function backtrack(start, currentCombo, currentSet, currentCost) {
        // Prune if current cost exceeds the cheapest found
        if (currentCost > cheapestPrice) {
            return;
        }

        // Check if all required services are covered
        const allCovered = requiredServices.every((service) =>
            currentSet.has(service.name)
        );

        if (allCovered) {
            if (currentCost < cheapestPrice) {
                cheapestPrice = currentCost;
                validCombinations.length = 0; // Clear previous combinations
            }
            if (currentCost === cheapestPrice) {
                validCombinations.push({
                    combo: [...currentCombo],
                    cost: currentCost
                });
            }
            return; // Found a valid combination
        }

        for (let i = start; i < sortedBundles.length; i++) {
            const bundle = sortedBundles[i];

            // Check if adding this budnle introduces duplicate services
            const hasDuplicate = bundle.services.some((service) =>
                currentSet.has(service)
            );
            if (hasDuplicate) {
                continue; // Skip bundles that add no new services
            }

            // Choose the bundle
            currentCombo.push(bundle);
            const newSet = new Set(currentSet);
            bundle.services.forEach((service) => newSet.add(service));

            backtrack(i + 1, currentCombo, newSet, currentCost + bundle.price);

            // Backtrack: remove the last added bundle
            currentCombo.pop();
        }
    }

    backtrack(0, [], new Set(), 0);
    return validCombinations;
}

function BestBundle(props) {
    const { selections } = props;
    const [ foundBestBundle, setFoundBestBundle ] = React.useState(false);
    const [ bestBundles, setBestBundles ] = React.useState([]);

    React.useEffect(() => {
        if (selections.length > 0) {
            // Find best bundle combination
            setBestBundles(findCombinations(selections));
            setFoundBestBundle(true);
        }
    }, [selections]);

    function renderSelectedServices() {
        if (selections.length > 0) {
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

    console.log("Selections", selections);
    console.log("Best Bundles", bestBundles);
    
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
        } else {
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
                    <Box sx={{ textAlign: 'center' }}>
                        <h2>Best Bundle Found!</h2>
                    </Box>
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
                    paddingTop: 4,
                    paddingBottom: 4,
                }}
            >
                {renderSelectedServices()}

                {renderBundles()}
            </Box>
        </Box>
    )
}

export default BestBundle;