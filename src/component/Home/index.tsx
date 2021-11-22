import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AddIcon from '@mui/icons-material/Add';

const Home: React.FC = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" elevation={3}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Micro-Frontend Architecture
            </Typography>
            <Button color="primary" variant="outlined" endIcon={<SlideshowIcon />}>
              Present
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item xs={3} sx={{ height: 'calc(100vh - 64px)' }}>
            <Paper
              sx={{ height: 'calc(100% - 0.1rem)', marginTop: '0.1rem', overflowY: 'auto' }}
              elevation={3}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '1rem',
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
                  <Typography variant="subtitle2">&nbsp;(Total: 4)</Typography>
                  <Button
                    sx={{ marginLeft: 'auto' }}
                    color="primary"
                    variant="outlined"
                    endIcon={<AddIcon />}
                  >
                    Add Slide
                  </Button>
                </Box>
                <Paper sx={{ marginBottom: '.5rem', minHeight: '256px' }} elevation={6}>
                  A
                </Paper>
                <Paper sx={{ marginBottom: '.5rem', minHeight: '256px' }} elevation={6}>
                  A
                </Paper>
                <Paper sx={{ marginBottom: '.5rem', minHeight: '256px' }} elevation={6}>
                  A
                </Paper>
                <Paper sx={{ marginBottom: '.5rem', minHeight: '256px' }} elevation={6}>
                  A
                </Paper>
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
                  >
                    Add Slide
                  </Button>
                </Paper>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={9}></Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
