import React from "react";

import regions from "../../data/regions.json"

import RegionSelection from "../../components/RegionSelection";
import ServicesSelect from "../../components/ServicesSelect";
import BestBundle from "../../components/BestBundle";

import Box from "@mui/material/Box";

function FBB() {
    const [selectedRegion, setSelectedRegion] = React.useState(0);
    const [selectionComplete, setSelectionComplete] = React.useState(false);
    const [selectedServices, setSelectedServices] = React.useState([]);

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    const handleSelectionComplete = (selection) => {
        setSelectedServices(selection);
        console.log("Test Succesful");
        console.log(selection);
        setSelectionComplete(true);
    }

    if (selectedRegion === 0) { // Region Selection
        return (
            <Box sx={{
                marginTop: "64px", // Adjust for fixed navbar height
            }}>
                <RegionSelection
                    regions={regions}
                    selectedRegion={selectedRegion}
                    handleRegionChange={handleRegionChange}
                />
            </Box>
        );
    } else if (selectedRegion > 0 && selectionComplete === false) { // Service Selection
        return (
            <Box sx={{
                marginTop: "64px", // Adjust for fixed navbar height
            }}>
                <ServicesSelect
                    region={regions[selectedRegion - 1]}
                    handleSelectionComplete={handleSelectionComplete}
                />
            </Box>
        );
    } else if (selectedRegion > 0 && selectionComplete === true) { // Find Best Bundle
        return (
            <Box sx={{
                marginTop: "64px", // Adjust for fixed navbar height
            }}>
                <BestBundle
                    selections={selectedServices}
                />
            </Box>
        )
    }
}

export default FBB;