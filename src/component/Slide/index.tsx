import React from 'react';

import { Paper } from '@mui/material';
import { useDecks } from '../../contexts/deck.context';
import { getBgColorCSS } from '../../utils/slides';

const Slide: React.FC = () => {
  const {
    deckConfig: { defaultBgColor },
  } = useDecks();

  return (
    <Paper
      elevation={6}
      sx={{
        margin: '2rem',
        padding: '2rem',
        height: 'calc(100% - 4rem)',
        background: defaultBgColor.mainColor,
        backgroundImage: getBgColorCSS(defaultBgColor),
      }}
    >
      This is where the deck goes
    </Paper>
  );
};

export default Slide;
