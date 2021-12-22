import { createContext, useContext } from 'react';
import { SlideConfig } from '../types/deck';

export type SlideContextType = {
  slides: Array<SlideConfig>;
  setSlides: React.Dispatch<React.SetStateAction<Array<SlideConfig>>>;
};

export const SlidesContext = createContext<SlideContextType>({
  slides: [],
  setSlides: () => {},
});

export const useSlides = () => useContext(SlidesContext);
