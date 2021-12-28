import { createContext, useContext } from 'react';
import { Action } from '../types/actions';
import { DeckConfig } from '../types/deck';
import { getInitialDeckConfig } from '../utils/slides';

export type DeckContextType = {
  deckConfig: DeckConfig;
  dispatch: React.Dispatch<Action<any>>;
};

export const DeckContext = createContext<DeckContextType>({
  deckConfig: getInitialDeckConfig(),
  dispatch: () => {},
});

export const useDecks = () => useContext(DeckContext);
