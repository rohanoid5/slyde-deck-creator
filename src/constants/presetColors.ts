import { BGColor } from '../types/decks';

export const DEFAULT_BG_COLORS: Array<BGColor> = [
  {
    mainColor: 'rgba(255, 255, 255, 0.11)',
    gradient: {
      angle: 0,
      type: 'linear',
      colors: [
        {
          percentage: 0,
          color: 'rgba(255, 255, 255, 0.11)',
        },
        {
          percentage: 100,
          color: 'rgba(255, 255, 255, 0.11)',
        },
      ],
    },
  },
  {
    mainColor: '#4158D0',
    gradient: {
      angle: 43,
      type: 'linear',
      colors: [
        {
          percentage: 0,
          color: '#4158D0',
        },
        {
          percentage: 46,
          color: '#C850C0',
        },
        {
          percentage: 100,
          color: '#FFCC70',
        },
      ],
    },
  },
  {
    mainColor: '#0093E9',
    gradient: {
      angle: 160,
      type: 'linear',
      colors: [
        {
          percentage: 0,
          color: '#0093E9',
        },
        {
          percentage: 100,
          color: '#80D0C7',
        },
      ],
    },
  },
  {
    mainColor: '#8EC5FC',
    gradient: {
      angle: 62,
      type: 'linear',
      colors: [
        {
          percentage: 0,
          color: '#8EC5FC',
        },
        {
          percentage: 100,
          color: '#E0C3FC',
        },
      ],
    },
  },
];
