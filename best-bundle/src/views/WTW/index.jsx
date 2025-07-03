import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import visuallyHidden from "@mui/utils/visuallyHidden";

function WTW() {
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
            // maxWidth: '600px',
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{ fontSize: '3rem', fontWeight: 'bold'}}
          >
            Where to Watch
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
          Enter a title to find your favorite movies, TV shows, or documentaries and check their streaming availability.
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1}
            useFlexGap
            sx={{
              pt: 2,
              width: { xs: '100%', sm: 'auto' },
            }}
          >
            <InputLabel htmlFor="search-title" sx={visuallyHidden}>
              Search for Title
            </InputLabel>
            <TextField
              id="search-title"
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Search for a title"
              placeholder="Enter title here"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Search for title',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
            >
              Search
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default WTW;