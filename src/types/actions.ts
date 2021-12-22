export type Action<T> = {
  type: string;
  payload: T;
};

export interface IActionCreator<P> {
  type: string;
  (payload: P): Action<P>;
}
