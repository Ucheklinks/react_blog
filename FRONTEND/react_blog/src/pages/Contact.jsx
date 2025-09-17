import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../components/component_color_theme/theme";

export function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        component="section"
        sx={{ p: 10, display: "flex", minHeight:"90vh", alignItems: "center"}}
      >
        <Stack
          spacing={30}
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%", height: 1 / 3, borderRadius: "16px" }}
        >
          <Box>
            {" "}
            <Typography component="p" sx={{ fontSize: "30px" }}>
              Connect with us
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "18px", mt: "20px", mb: "20px" }}
            >
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident.
            </Typography>
            <Typography
              component="p"
              sx={{ fontSize: "18px", mt: "20px", mb: "20px" }}
            >
              What is your email?
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter email here"
              variant="outlined"
              sx={{ width: "100%", mb: "10px" }}
            />
            <Button
              variant="contained"
              href="#contained-buttons"
              sx={{ mb: "10px" }}
              color="customBlack"
            >
              Submit
            </Button>
          </Box>
          <CardMedia
            component="video"
            src="https://framerusercontent.com/assets/VPjSVKtA2t8QpWGVBJDs23sPH5E.mp4"
            alt="rotating crystal video"
            sx={{ width: 1 / 3, color: "success.main", borderRadius: "16px" }}
            autoPlay
          ></CardMedia>
        </Stack>
      </Box>
    </ThemeProvider>
  );
}
