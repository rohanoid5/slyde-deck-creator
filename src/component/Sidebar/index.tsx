import React from 'react';
import { Grid, Paper, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

import Preview from '../Preview';

import { useDecks } from '../../contexts/deck.context';
import { addSlideActionCreator } from '../../actions';

const Sidebar: React.FC = () => {
  const { deckConfig, dispatch } = useDecks();

  const addSlides = () => {
    dispatch(addSlideActionCreator(null));
  };

  return (
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
            <Typography variant="subtitle2">&nbsp;(Total: {deckConfig.slides.length})</Typography>
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

          <Preview />

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
  );
};

export default Sidebar;
