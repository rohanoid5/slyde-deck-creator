import { createContext, useContext } from 'react';
import { getInitialDeckConfig } from '../reducers/deck.reducer';
import { Action } from '../types/actions';
import { DeckConfig } from '../types/deck';

export type DeckContextType = {
  deckConfig: DeckConfig;
  dispatch: React.Dispatch<Action<any>>;
};

export const DeckContext = createContext<DeckContextType>({
  deckConfig: getInitialDeckConfig(),
  dispatch: () => {},
});

export const useDecks = () => useContext(DeckContext);
