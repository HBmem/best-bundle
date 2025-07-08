import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

function StreamingCard(props) {
    const { streamingService, slectedServices, handleServiceClick } = props;

    return (
        <Card>
            <CardActionArea
                onClick={() => handleServiceClick(streamingService)}
                sx={{
                    textAlign: 'center',
                    padding: 2,
                    borderBlockColor: streamingService.color || '#ccc',
                    borderBlockWidth: 2,
                    borderBlockStyle: 'solid',
                    height: '100%',
                }}
            >
                <CardMedia
                    component="img"
                    image={streamingService.logo}
                    alt={streamingService.name}
                    sx={{
                        objectFit: 'contain',
                        marginBottom: 2,
                        width: '100px',
                        height: 'auto',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        filter: 'grayscale(100%)', // Apply grayscale filter
                        transition: 'filter 0.3s ease-in-out',
                        '&:hover': {
                            filter: 'grayscale(0%)', // Remove grayscale on hover
                        },
                    }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Visit <Link color="primary" href={streamingService.url} target="_blank" rel="noopener noreferrer" sx={{
                            color: streamingService.color || '#000',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            transition: 'color 0.3s ease-in-out',
                            '&:hover': {
                                color: streamingService.color ? `${streamingService.color}CC` : '#000',
                                fontWeight: 'bold',
                                textDecoration: 'underline',
                            },
                        }}>{streamingService.name}</Link> to learn more.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

// StreamingCard.propTypes = {
//     streamingService: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default StreamingCard;