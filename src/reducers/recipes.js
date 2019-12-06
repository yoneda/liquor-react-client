import {
  RECIPES_LOADED,
  STARS_LOADED,
  POSTS_LOADED,
  PICK_RECIPE
} from "../actions/actionTypes";

const initialState = {
  picked: {},
  posts: [],
  stars: [],
  arrivals: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_LOADED:
      return {
        ...state,
        arrivals: action.payload
      };
    case STARS_LOADED:
      return {
        ...state,
        stars: action.payload
      };
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.payload
      };
    case PICK_RECIPE:
      return {
        ...state,
        picked: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
