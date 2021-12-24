import React, { useEffect, useReducer, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { CurrentSlideContext } from '../../contexts/currentSlide.context';
import { DeckContext } from '../../contexts/deck.context';

import Slide from '../Slide';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';

import { deckReducer, getInitialDeckConfig } from '../../reducers/deck.reducer';

const Home: React.FC = () => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const [deckConfig, dispatch] = useReducer(deckReducer, getInitialDeckConfig());

  useEffect(() => {
    setSelectedSlide(0);
  }, [deckConfig.slides]);

  return (
    <DeckContext.Provider value={{ deckConfig, dispatch }}>
      <CurrentSlideContext.Provider value={{ selectedSlide, setSelectedSlide }}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Toolbar />

            <Grid container>
              <Sidebar />

              <Grid item xs={9}>
                {deckConfig.slides.length === 0 ? (
                  <Typography variant="h4" component="div" align="center" sx={{ margin: '12rem' }}>
                    So empty....
                  </Typography>
                ) : (
                  <Slide />
                )}
              </Grid>
            </Grid>
          </Box>
        </div>
      </CurrentSlideContext.Provider>
    </DeckContext.Provider>
  );
};

export default Home;
