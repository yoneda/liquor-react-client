import { combineReducers } from "redux";

import profile from "./profile";
import recipes from "./recipes";

const rootReducer = combineReducers({
  profile,
  recipes,
})

export default rootReducer;