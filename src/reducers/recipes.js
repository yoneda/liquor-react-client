import {
  RECIPES_LOADED,
  STARS_LOADED,
  POSTS_LOADED
} from "../actions/actionTypes";

const recipeGen = title => ({
  title,
  ingredients: ["材料1", "材料2", "材料3"],
  directions: ["1.手順", "2.手順", "3.手順"],
  createdAt: "2019-11-21 17:00:00",
  updatedAt: "2019-11-21 17:00:00",
  cookTime: 10,
  cost: 500
});

const initialState = {
  picked: recipeGen("ペペロンチーノ"),
  posts: [],
  stars: [],
  rankings: [recipeGen("おでん"), recipeGen("麻婆豆腐"), recipeGen("餃子")],
  arrivals: []
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
    default:
      return state;
  }
};

export default reducer;
