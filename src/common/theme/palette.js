import { grey } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server, darkMode) => ({
  mode: darkMode ? 'dark' : 'light',
  background: {
    default: darkMode ? '#0b1220' : '#f4f7fb',
  },
  primary: {
    main:
      validatedColor(server?.attributes?.colorPrimary) || (darkMode ? '#93c5fd' : '#142d4e'),
  },
  secondary: {
    main:
      validatedColor(server?.attributes?.colorSecondary) || (darkMode ? '#5eead4' : '#00796b'),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: '#3bb2d0',
  },
  alwaysDark: {
    main: grey[900],
  },
});
