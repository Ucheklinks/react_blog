import { createTheme } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    tonalOffset: 0.2,
    contrastThreshold: 3,
  },
});

theme = createTheme(theme, {
  palette: {
    customBlack: theme.palette.augmentColor({
      color: {
        main: "#0F0E0E", // This is your base color
      },
      name: "customBlack", // Needed for internal purposes like CSS class generation
    }),
  },
});

export default theme;
