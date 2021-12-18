import { createContext, useContext } from 'react';
import { DeckConfig } from '../types/deck';

export type DeckContextType = {
  slides: Array<DeckConfig>;
  setSlides: React.Dispatch<React.SetStateAction<Array<DeckConfig>>>;
};

export const DeckContext = createContext<DeckContextType>({
  slides: [],
  setSlides: () => {},
});

export const useDecks = () => useContext(DeckContext);
