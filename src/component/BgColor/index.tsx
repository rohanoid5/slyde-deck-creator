import React from 'react';
import Box from '@mui/material/Box';
import { DEFAULT_BG_COLORS as presetBgColors } from '../../constants/presetColors';
import { getBgColorCSS } from '../../utils/slides';

const BgColor: React.FC = () => {
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: color.mainColor,
              backgroundImage: getBgColorCSS(color),
              width: '3rem',
              height: '3rem',
              borderRadius: '6rem',
              margin: '0.5rem',
            }}
          ></div>
        </div>
      ))}
    </Box>
  );
};

export default BgColor;
