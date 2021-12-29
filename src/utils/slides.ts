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
    x: 0,
    y: 0,
    xPercentage: 0,
    yPercentage: 0,
    fontWeight: '500',
    value: placeholder,
  };
};

export const updateContentPosition = (
  content: Content,
  x: number,
  y: number,
  xPercentage: number,
  yPercentage: number,
): Content => {
  return {
    ...content,
    x,
    y,
    xPercentage,
    yPercentage,
  };
};

export const updateContentValue = (content: Content, value: string): Content => {
  return {
    ...content,
    value,
  };
};
