import React, { useState } from 'react';

import { Box, Button, IconButton, Paper, Popover, Typography, useTheme } from '@mui/material';
import MoreIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useDecks } from '../../contexts/deck.context';
import { useCurrentDeck } from '../../contexts/currentSlide.context';
import { deleteSlideActionCreator } from '../../actions';

import { getBgColorCSS } from '../../utils/slides';

import PreviewStyle from './Preview.module.scss';

const Preview: React.FC = () => {
  const [anchorPopEl, setAnchorPopEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);

  const theme = useTheme();
  const { selectedSlide, setSelectedSlide } = useCurrentDeck();
  const {
    deckConfig: { slides, defaultBgColor },
    dispatch,
  } = useDecks();

  const deleteSlide = () => {
    dispatch(deleteSlideActionCreator({ idx: selectedSlide }));
  };

  const handleMoreClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorPopEl(e.currentTarget);
  };

  const handleMoreClose = () => {
    setAnchorPopEl(null);
  };

  const handleSlideClick = (idx: number) => setSelectedSlide(idx);

  const isPopOpen = Boolean(anchorPopEl);
  const popId = isPopOpen ? 'simple-popover' : undefined;

  return (
    <>
      {slides.map((slide, idx) => {
        return (
          <div
            key={slide.id}
            onClick={() => handleSlideClick(idx)}
            className={PreviewStyle['container']}
          >
            <Paper
              sx={{
                marginBottom: '.5rem',
                minHeight: '256px',
                position: 'relative',
                border: idx === selectedSlide ? `2px solid ${theme.palette.primary.main}` : '',
                background: defaultBgColor.mainColor,
                backgroundImage: getBgColorCSS(defaultBgColor),
              }}
              elevation={6}
            >
              {slide.contents.map(({ id, variant, xPercentage, yPercentage, value }) => (
                <Typography
                  key={id}
                  variant={variant}
                  component="div"
                  sx={{
                    position: 'absolute',
                    left: `${xPercentage}%`,
                    top: `${yPercentage}%`,
                    width: 'max-content',
                  }}
                  className={PreviewStyle[`typography-${variant}`]}
                >
                  {value}
                </Typography>
              ))}

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
                      deleteSlide();
                      handleMoreClose();
                    }}
                  >
                    Delete
                  </Button>
                  <Button
                    size="small"
                    startIcon={<StarOutlineIcon />}
                    className={PreviewStyle['action-btn']}
                  >
                    Star
                  </Button>
                  <Button
                    size="small"
                    startIcon={<KeyboardArrowUpIcon />}
                    className={PreviewStyle['action-btn']}
                  >
                    Shift Up
                  </Button>
                  <Button
                    size="small"
                    startIcon={<KeyboardArrowDownIcon />}
                    className={PreviewStyle['action-btn']}
                  >
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
          </div>
        );
      })}
    </>
  );
};

export default Preview;
