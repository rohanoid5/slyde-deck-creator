import React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/system';
import { DEFAULT_BG_COLORS as presetBgColors } from '../../constants/presetColors';
import { BGColor } from '../../types/deck';
import { getBgColorCSS } from '../../utils/slides';
import { useDecks } from '../../contexts/deck.context';
import { updateDeckBackgroundActionCreator } from '../../actions';

import BgColorStyle from './BgColor.module.scss';

const BgColor: React.FC = () => {
  const { deckConfig, dispatch } = useDecks();
  const theme = useTheme();

  const onColorClick = (bgColor: BGColor) => {
    dispatch(updateDeckBackgroundActionCreator({ bgColor }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '16rem',
        justifyContent: 'space-between',
      }}
    >
      {presetBgColors.map((color, idx) => (
        <div key={color.mainColor} className={BgColorStyle['color-wrapper']}>
          <div
            style={{
              backgroundColor: color.mainColor,
              backgroundImage: getBgColorCSS(color),
              width: '3rem',
              height: '3rem',
              borderRadius: '6rem',
              margin: '0.5rem',
              border:
                deckConfig.defaultBgColor.mainColor === color.mainColor
                  ? `2px solid ${theme.palette.primary.main}`
                  : '',
            }}
            onClick={() => onColorClick(color)}
          ></div>
        </div>
      ))}
    </Box>
  );
};

export default BgColor;
