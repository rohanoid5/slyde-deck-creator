import {
  CREATE_SLIDE,
  REMOVE_SLIDE,
  UPDATE_DECK_BG_COLOR,
  UPDATE_DECK_NAME,
} from '../constants/actions';
import { Action, IActionCreator } from '../types/actions';
import { BGColor } from '../types/deck';

function actionCreator<P>(type: string): IActionCreator<P> {
  return Object.assign((payload: P) => ({ type, payload }), { type });
}

export function isActionType<P>(
  action: Action<any>,
  actionCreator: IActionCreator<P>,
): action is Action<P> {
  return action.type === actionCreator.type;
}

export const updateDeckNameActionCreator = actionCreator<{ name: string }>(UPDATE_DECK_NAME);
export const updateDeckBackgroundActionCreator =
  actionCreator<{ bgColor: BGColor }>(UPDATE_DECK_BG_COLOR);

export const addSlideActionCreator = actionCreator<null>(CREATE_SLIDE);
export const deleteSlideActionCreator = actionCreator<{ id: string }>(REMOVE_SLIDE);
