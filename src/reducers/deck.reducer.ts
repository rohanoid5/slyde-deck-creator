import {
  addContentActionCreator,
  addSlideActionCreator,
  deleteSlideActionCreator,
  isActionType,
  updateContentPositionActionCreator,
  updateContentValueActionCreator,
  updateDeckBackgroundActionCreator,
  updateDeckNameActionCreator,
} from '../actions';

import { Action } from '../types/actions';
import { DeckConfig } from '../types/deck';
import {
  getDefaultContent,
  getInitialSlideConfig,
  updateContentPosition,
  updateContentValue,
} from '../utils/slides';

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
    return {
      ...state,
      slides: state.slides.filter((_, idx) => idx !== action.payload.idx),
    };
  }

  if (isActionType(action, addContentActionCreator)) {
    const { selectedSlide, variant, placeholder } = action.payload;

    return {
      ...state,
      slides: state.slides.map((slide, idx) => {
        return selectedSlide !== idx
          ? slide
          : {
              ...slide,
              updatedAt: new Date(),
              contents: [...slide.contents, getDefaultContent(variant, placeholder)],
            };
      }),
    };
  }

  if (isActionType(action, updateContentPositionActionCreator)) {
    const { selectedSlide, id, x, y, xPercentage, yPercentage } = action.payload;

    return {
      ...state,
      slides: state.slides.map((slide, idx) => {
        return selectedSlide !== idx
          ? slide
          : {
              ...slide,
              updatedAt: new Date(),
              contents: slide.contents.map((content) => {
                return id !== content.id
                  ? content
                  : updateContentPosition(content, x, y, xPercentage, yPercentage);
              }),
            };
      }),
    };
  }

  if (isActionType(action, updateContentValueActionCreator)) {
    const { selectedSlide, id, value } = action.payload;

    return {
      ...state,
      slides: state.slides.map((slide, idx) => {
        return selectedSlide !== idx
          ? slide
          : {
              ...slide,
              updatedAt: new Date(),
              contents: slide.contents.map((content) => {
                return id !== content.id ? content : updateContentValue(content, value);
              }),
            };
      }),
    };
  }

  return { ...state };
};
