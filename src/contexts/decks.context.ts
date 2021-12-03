import { createContext, useContext } from 'react';
import { DeckConfig } from '../types/decks';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export type DeckContextType = {
  decks: Array<DeckConfig>;
  setDecks: React.Dispatch<React.SetStateAction<Array<DeckConfig>>>;
};

export const DeckContext = createContext<DeckContextType>({
  decks: [],
  setDecks: () => {},
});

export const useDecks = () => useContext(DeckContext);
