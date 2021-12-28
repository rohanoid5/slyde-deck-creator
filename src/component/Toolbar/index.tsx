import React from 'react';
import {
  AppBar,
  Grid,
  InputBase,
  IconButton,
  Popover,
  Button,
  Toolbar as MUIToolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import BgColor from '../BgColor';

import { Variant } from '../../types/deck';
import { TYPOGRAPHY_MAP } from '../../constants/typography';

import { useDecks } from '../../contexts/deck.context';
import { useCurrentDeck } from '../../contexts/currentSlide.context';
import { addContentActionCreator, updateDeckNameActionCreator } from '../../actions';

const Toolbar: React.FC = () => {
  const { deckConfig, dispatch } = useDecks();

  const { selectedSlide } = useCurrentDeck();

  const [anchorElBgColor, setAnchorElBgColor] = React.useState<HTMLButtonElement | null>(null);
  const [anchorElTypography, setAnchorElTypography] = React.useState<HTMLButtonElement | null>(
    null,
  );

  const handleBgColorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElBgColor(event.currentTarget);
  };

  const handleSetTypographyClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTypography(event.currentTarget);
  };

  const handleBgColorClose = () => {
    setAnchorElBgColor(null);
  };

  const handleSetTypographyClose = () => {
    setAnchorElTypography(null);
  };

  const openBgColor = Boolean(anchorElBgColor);
  const openTypography = Boolean(anchorElTypography);

  const onChangeDeckName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDeckNameActionCreator({ name: e.currentTarget.value }));
  };

  const onClickTypography = (variant: Variant, text: string) => {
    dispatch(addContentActionCreator({ selectedSlide, variant, placeholder: text }));
    handleSetTypographyClose();
  };

  return (
    <AppBar position="static" elevation={3}>
      <MUIToolbar>
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
          <IconButton
            disabled={!deckConfig.slides.length}
            aria-label="background-color"
            onClick={handleBgColorClick}
          >
            <ColorLensIcon />
          </IconButton>
          <Popover
            id={openBgColor ? 'bg-popover' : undefined}
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

          <IconButton
            disabled={!deckConfig.slides.length}
            aria-label="add-text"
            onClick={handleSetTypographyClick}
          >
            <TextFieldsIcon />
          </IconButton>
          <Popover
            id={openTypography ? 'typography-popover' : undefined}
            open={openTypography}
            anchorEl={anchorElTypography}
            onClose={handleSetTypographyClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 550, height: 500, overflowY: 'auto' }}>
              <List>
                {TYPOGRAPHY_MAP.map(({ variant, text }) => (
                  <ListItem disablePadding key={variant}>
                    <ListItemButton onClick={() => onClickTypography(variant, text)}>
                      <ListItemText
                        primary={text}
                        primaryTypographyProps={{ variant, component: 'div' }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Popover>

          <IconButton disabled={!deckConfig.slides.length} aria-label="change-text-color">
            <FormatColorTextIcon />
          </IconButton>

          <Button
            color="primary"
            variant="contained"
            sx={{ marginLeft: 'auto' }}
            endIcon={<SlideshowIcon />}
          >
            Present
          </Button>
        </Grid>
      </MUIToolbar>
    </AppBar>
  );
};

export default Toolbar;
