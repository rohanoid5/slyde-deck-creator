import React from 'react';
import ReactDOM from 'react-dom';

import { Container, createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/system';

import { defaultThemeOptions } from './theme/default';

import './index.css';

const App = () => {
  const theme = createTheme(defaultThemeOptions);

  return (
    <div className="main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>HEY!!</Container>
      </ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
