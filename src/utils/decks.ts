import { BGColor, Content, DeckConfig } from '../types/decks';
import { v4 as uuidv4 } from 'uuid';

export const getDefaultDeck = (): DeckConfig => ({
  id: uuidv4(),
  contents: [] as Array<Content>,
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
});

export const getBgColorCSS = (color: BGColor): string => {
  const { type, colors, angle } = color.gradient;
  const parsedColors = colors.reduce((acc, curr) => {
    return acc + `, ${curr.color} ${curr.percentage}%`;
  }, '');

  return `${type}-gradient(${angle}deg${parsedColors})`;
};
