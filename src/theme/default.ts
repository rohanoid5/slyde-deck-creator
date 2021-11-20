import { ThemeOptions } from '@mui/material/styles/createTheme';

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#0f0',
    },
    background: {
      default: '#111111',
      paper: '#212121',
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: `"Montserrat", "Helvetica", "Arial", sans-serif`,
  },
};
