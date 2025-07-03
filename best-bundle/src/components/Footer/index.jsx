import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Container
        sx={{
            display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                    borderTop: '1px solid #e0e0e0',
                    borderColor: 'divider',
                }}
            >
                <div>
                    <Typography variant="body2" sx={{ color: 'text.secondary', padding: '16px' }}>
                        © {new Date().getFullYear()} Best Bundle. All rights reserved.
                    </Typography>
                </div>
                <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ justifyContent: 'left', color: 'text.secondary', padding: '16px' }}
                >
                    <IconButton
                        color="inherit"
                        size="small"
                        component={Link}
                        to="https://github.com/HBmem/best-bundle"
                        aria-label="Github"
                        sx={{ alignSelf: 'center' }}
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        size="small"
                        component={Link}
                        to="https://www.linkedin.com/in/headley-m-brissett/"
                        aria-label="LinkedIn"
                        sx={{ alignSelf: 'center' }}
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Stack>
            </Box>
        </Container>
    )
}

export default Footer;