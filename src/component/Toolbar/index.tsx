import React from 'react';
import {
  AppBar,
  Grid,
  InputBase,
  IconButton,
  Popover,
  Button,
  Toolbar as MUIToolbar,
} from '@mui/material';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';

import BgColor from '../BgColor';

import { useDecks } from '../../contexts/deck.context';
import { updateDeckNameActionCreator } from '../../actions';

const Toolbar: React.FC = () => {
  const { deckConfig, dispatch } = useDecks();

  const [anchorElBgColor, setAnchorElBgColor] = React.useState<HTMLButtonElement | null>(null);

  const handleBgColorClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElBgColor(event.currentTarget);
  };

  const handleBgColorClose = () => {
    setAnchorElBgColor(null);
  };

  const openBgColor = Boolean(anchorElBgColor);

  const onChangeDeckName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateDeckNameActionCreator({ name: e.currentTarget.value }));
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

          <IconButton disabled={!deckConfig.slides.length} aria-label="add-text">
            <TextFieldsIcon />
          </IconButton>

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
