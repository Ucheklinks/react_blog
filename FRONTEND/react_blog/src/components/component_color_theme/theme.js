import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  palette: {
   
    tonalOffset: 0.2,
    contrastThreshold: 3,
  },
});

theme = createTheme(theme, {
  palette: {
    // Create a custom "salmon" color, and let MUI auto-generate light/dark/contrastText
    customGrey: theme.palette.augmentColor({
      color: {
        main: '#607d8b', // This is your base color
      },
      name: 'customGrey', // Needed for internal purposes like CSS class generation
    }),
  },
});

export default theme;