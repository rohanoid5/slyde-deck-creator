import { v4 as uuidv4 } from 'uuid';
import {
  addSlideActionCreator,
  deleteSlideActionCreator,
  isActionType,
  updateDeckBackgroundActionCreator,
  updateDeckNameActionCreator,
} from '../actions';

import { DEFAULT_BG_COLORS } from '../constants/presetColors';
import { Action } from '../types/actions';
import { Content, DeckConfig, SlideConfig } from '../types/deck';

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

export const deckReducer = (state: DeckConfig, action: Action<any>): DeckConfig => {
  if (isActionType(action, updateDeckNameActionCreator)) {
    return { ...state, name: action.payload.name };
  }

  if (isActionType(action, updateDeckBackgroundActionCreator)) {
    return { ...state, defaultBgColor: action.payload.bgColor };
  }

  if (isActionType(action, addSlideActionCreator)) {
    return { ...state, slides: [...state.slides, getInitialSlideConfig()] };
  }

  if (isActionType(action, deleteSlideActionCreator)) {
    return { ...state, slides: state.slides.filter((slide) => slide.id !== action.payload.id) };
  }

  return { ...state };
};
