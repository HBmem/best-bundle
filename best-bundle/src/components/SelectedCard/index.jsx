import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

function SelectedCard(props) {
    const { streamingService, handleServiceClick } = props;

    return (
        <Card
            sx={{
                margin: 1,
                width: '60px',
                height: '60px',
                borderRadius: "50%",
                border: '2px solid',
                borderColor: streamingService.color || '#ccc',
                backgroundColor: streamingService.color ? `${streamingService.color}33` : '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'none',
            }}
        >
            <CardActionArea
                onClick={() => handleServiceClick(streamingService)}
                sx={{
                    borderRadius: "50%",
                    overflow: 'hidden',
                    width: '100%',
                    height: '100%',
                }}
            >
                <CardMedia
                    component="img"
                    image={streamingService.logo}
                    alt={streamingService.name}
                    sx={{
                        objectFit: 'contain',
                        width: '80%',
                        height: '80%',
                        margin: 'auto',
                    }}
                />
            </CardActionArea>
        </Card>
    );
}

export default SelectedCard;