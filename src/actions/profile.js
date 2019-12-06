import { RECEIVE_PROFILE } from "./actionTypes";
import agent from "../agent";

export const receiveProfile = payload => ({
  type: RECEIVE_PROFILE,
  payload
});

export const loadProfile = account => async dispatch => {
  const { user } = await agent.Profile.get(account);
  dispatch(receiveProfile(user));
};

export const updateProfile = (account, profile) => async dispatch => {
  const { user } = await agent.Profile.edit(account, profile);
  dispatch(receiveProfile(user));
};
