import React from "react";

import Box from "@mui/material/Box";
import RegionSelection from "../../components/RegionSelection";
import ServicesSelect from "../../components/ServicesSelect";

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
];

function FBB() {
    const [selectedRegion, setSelectedRegion] = React.useState(0);

    const handleRegionChange = (event) => {
        setSelectedRegion(event.target.value);
    };

    console.log("Selected Region:", selectedRegion);

    if (selectedRegion === 0) {
        return (
            <Box>
                <RegionSelection
                    regions={regions}
                    selectedRegion={selectedRegion}
                    handleRegionChange={handleRegionChange}
                />
            </Box>
        );
    } else if (selectedRegion > 0) {
        return (
            <Box>
                <ServicesSelect
                    region={regions[selectedRegion - 1]}
                />
            </Box>
        );
    }
}

export default FBB;