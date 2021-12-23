import React, { useEffect, useReducer, useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddIcon from '@mui/icons-material/Add';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import InputBase from '@mui/material/InputBase';

import { CurrentSlideContext } from '../../contexts/currentSlide.context';
import { DeckContext } from '../../contexts/deck.context';

import Preview from '../Preview';
import Slide from '../Slide';
import BgColor from '../BgColor';

import { addSlideActionCreator, updateDeckNameActionCreator } from '../../actions';
import { deckReducer, getInitialDeckConfig } from '../../reducers/deck.reducer';

const Home: React.FC = () => {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);

  const [anchorElBgColor, setAnchorElBgColor] = React.useState<HTMLButtonElement | null>(null);

  const handleBgColorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElBgColor(event.currentTarget);
  };

  const handleBgColorClose = () => {
    setAnchorElBgColor(null);
  };

  const openBgColor = Boolean(anchorElBgColor);

  const addSlides = () => {
    dispatch(addSlideActionCreator(null));
  };

  const [deckConfig, dispatch] = useReducer(deckReducer, getInitialDeckConfig());

  const onChangeDeckName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDeckNameActionCreator({ name: e.currentTarget.value }));
  };

  useEffect(() => {
    setSelectedSlide(0);
  }, [deckConfig.slides]);

  return (
    <DeckContext.Provider value={{ deckConfig, dispatch }}>
      <CurrentSlideContext.Provider value={{ selectedSlide, setSelectedSlide }}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={3}>
              <Toolbar>
                <Grid item xs={3}>
                  <InputBase
                    sx={{
                      width: '100%',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                    value={deckConfig.name}
                    inputProps={{ 'aria-label': 'deck-title' }}
                    onChange={onChangeDeckName}
                  />
                </Grid>

                <Grid item xs={9} sx={{ display: 'flex' }}>
                  <IconButton aria-label="background-color" onClick={handleBgColorClick}>
                    <ColorLensIcon />
                  </IconButton>
                  <Popover
                    id={openBgColor ? 'simple-popover' : undefined}
                    open={openBgColor}
                    anchorEl={anchorElBgColor}
                    onClose={handleBgColorClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <BgColor />
                  </Popover>

                  <Button
                    color="primary"
                    variant="contained"
                    sx={{ marginLeft: 'auto' }}
                    endIcon={<SlideshowIcon />}
                  >
                    Present
                  </Button>
                </Grid>
              </Toolbar>
            </AppBar>

            <Grid container>
              <Grid item xs={3} sx={{ height: 'calc(100vh - 64px)' }}>
                <Paper
                  sx={{
                    height: 'calc(100% - 0.1rem)',
                    marginTop: '0.1rem',
                    overflowY: 'auto',
                  }}
                  elevation={3}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      padding: '1.5rem',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        paddingBottom: '1rem',
                        alignItems: 'baseline',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Your Slides
                      </Typography>
                      <Typography variant="subtitle2">
                        &nbsp;(Total: {deckConfig.slides.length})
                      </Typography>
                      <Button
                        sx={{ marginLeft: 'auto' }}
                        color="primary"
                        variant="text"
                        endIcon={<AddIcon />}
                        onClick={addSlides}
                      >
                        Add Slide
                      </Button>
                    </Box>

                    <Preview selectedSlide={selectedSlide} setSelectedSlide={setSelectedSlide} />

                    <Paper
                      sx={{
                        marginBottom: '.5rem',
                        minHeight: '256px',
                        position: 'relative',
                      }}
                    >
                      <Button
                        sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, 0)',
                        }}
                        color="primary"
                        variant="contained"
                        endIcon={<AddIcon />}
                        onClick={addSlides}
                      >
                        Add Slide
                      </Button>
                    </Paper>
                  </Box>
                </Paper>
              </Grid>
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
