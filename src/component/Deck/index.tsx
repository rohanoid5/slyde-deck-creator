import React from 'react';

import { Paper } from '@mui/material';

const Deck: React.FC = () => {
  return (
    <Paper
      elevation={6}
      sx={{
        margin: '2rem',
        padding: '2rem',
        height: 'calc(100% - 4rem)',
        background: 'rgb(65, 88, 208)',
        backgroundImage:
          'linear-gradient(43deg, rgb(65, 88, 208) 0%, rgb(200, 80, 192) 46%, rgb(255, 204, 112) 100%)',
      }}
    >
      This is where the deck goes
    </Paper>
  );
};

export default Deck;
