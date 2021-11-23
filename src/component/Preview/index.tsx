import React from 'react';

import { Box, Button, IconButton, Paper, Popover, Typography } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PreviewStyle from './Preview.module.scss';

const Preview: React.FC<{
  slides: Array<string>;
  deleteSlide: (slideId: string) => void;
}> = ({ slides, deleteSlide }) => {
  const [anchorPopEl, setAnchorPopEl] = React.useState<(EventTarget & HTMLButtonElement) | null>(
    null,
  );

  const handleMoreClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorPopEl(e.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorPopEl(null);
  };

  const isPopOpen = Boolean(anchorPopEl);
  const popId = isPopOpen ? 'simple-popover' : undefined;

  return (
    <>
      {slides.map((slideId, idx) => {
        return (
          <Paper
            key={slideId}
            sx={{
              marginBottom: '.5rem',
              minHeight: '256px',
              position: 'relative',
            }}
            elevation={6}
          >
            <IconButton
              aria-describedby={popId}
              size="medium"
              aria-label="display more actions"
              edge="end"
              color="inherit"
              sx={{ position: 'absolute', right: '1rem', top: '0.25rem' }}
              onClick={handleMoreClick}
            >
              <MoreIcon />
            </IconButton>

            <Popover
              id={popId}
              open={isPopOpen}
              anchorEl={anchorPopEl}
              onClose={handleMoreClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
                className={PreviewStyle['more-icon-container']}
              >
                <Button
                  size="small"
                  startIcon={<DeleteIcon />}
                  onClick={() => {
                    deleteSlide(slideId);
                    handleMoreClose();
                  }}
                >
                  Delete
                </Button>
                <Button size="small" startIcon={<StarOutlineIcon />}>
                  Star
                </Button>
                <Button size="small" startIcon={<KeyboardArrowUpIcon />}>
                  Shift Up
                </Button>
                <Button size="small" startIcon={<KeyboardArrowDownIcon />}>
                  Shift Down
                </Button>
              </Box>
            </Popover>

            <Box
              sx={{
                position: 'absolute',
                height: '2rem',
                background: '#000000',
                opacity: 0.3,
                bottom: 0,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography variant="subtitle1" align="center" sx={{ fontWeight: '400' }}>
                Slide Number: {idx + 1}
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </>
  );
};

export default Preview;
