import { createContext, useContext } from 'react';

export type CurrentSlideContextType = {
  selectedSlide: number;
  setSelectedSlide: React.Dispatch<React.SetStateAction<number>>;
};

export const CurrentSlideContext = createContext<CurrentSlideContextType>({
  selectedSlide: 0,
  setSelectedSlide: () => {},
});

export const useCurrentDeck = () => useContext(CurrentSlideContext);
