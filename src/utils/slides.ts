import { v4 as uuidv4 } from 'uuid';
import { BGColor, Content, DeckConfig, SlideConfig, Variant } from '../types/deck';
import { DEFAULT_BG_COLORS } from '../constants/presetColors';

export const getInitialDeckConfig = (): DeckConfig => ({
  id: uuidv4(),
  name: 'UNTITLED',
  slides: [] as Array<SlideConfig>,
  createdAt: new Date(),
  updatedAt: new Date(),
  defaultBgColor: DEFAULT_BG_COLORS[0],
});

export const getInitialSlideConfig = (): SlideConfig => ({
  id: uuidv4(),
  contents: [] as Array<Content>,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const getBgColorCSS = (color: BGColor): string => {
  const { type, colors, angle } = color.gradient;
  const parsedColors = colors.reduce((acc, curr) => {
    return acc + `, ${curr.color} ${curr.percentage}%`;
  }, '');

  return `${type}-gradient(${angle}deg${parsedColors})`;
};

export const getDefaultContent = (variant: Variant, placeholder: string): Content => {
  return {
    id: uuidv4(),
    variant,
    positionX: 0,
    positionY: 0,
    fontWeight: '500',
    value: placeholder,
  };
};

export const updateContentPosition = (
  content: Content,
  positionX: number,
  positionY: number,
): Content => {
  return {
    ...content,
    positionX,
    positionY,
  };
};
