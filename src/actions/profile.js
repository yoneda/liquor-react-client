import { RECEIVE_PROFILE, UPDATE_PROFILE } from "./actionTypes";
import agent from "../agent";

export const receiveProfile = payload => ({
  type: RECEIVE_PROFILE,
  payload
});

export const updateProfile = payload => ({
  type: UPDATE_PROFILE,
  payload
});

export const loadProfile = account => async dispatch => {
  const { user } = await agent.Profile.get(account);
  dispatch(receiveProfile(user));
};
