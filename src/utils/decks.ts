import { Content, DeckConfig } from '../types/decks';
import { v4 as uuidv4 } from 'uuid';

export const getDefaultDeck = (): DeckConfig => ({
  id: uuidv4(),
  contents: [] as Array<Content>,
  createdAt: new Date().getTime(),
  updatedAt: new Date().getTime(),
});
