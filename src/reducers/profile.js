import { RECEIVE_PROFILE, UPDATE_PROFILE } from "../actions/actionTypes";

const initialState = {
  name: "",
  bio: "",
  mail: "",
  password: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
