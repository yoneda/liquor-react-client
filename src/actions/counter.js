import {
  ADD_COUNT,
  SUB_COUNT,
  RESET_COUNT,
} from "./actionTypes";

export const addCount = () => ({ type: ADD_COUNT });
export const subCount = () => ({ type: SUB_COUNT });
export const resetCount = () => ({ type: RESET_COUNT });
