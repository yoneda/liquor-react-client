import { combineReducers } from "redux";

import profile from "./profile";
import recipes from "./recipes";
import editor from "./editor";

const rootReducer = combineReducers({
  profile,
  recipes,
  editor,
})

export default rootReducer;