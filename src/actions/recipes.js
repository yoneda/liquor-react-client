import {
  RECIPES_LOADED,
  STARS_LOADED,
  POSTS_LOADED,
  PICK_RECIPE
} from "./actionTypes";
import agent from "../agent";

export const recipesLoaded = payload => ({
  type: RECIPES_LOADED,
  payload
});

export const loadRecipes = () => async dispatch => {
  const recipes = await agent.Recipes.all().then(results => results.recipes);
  dispatch(recipesLoaded(recipes));
};
