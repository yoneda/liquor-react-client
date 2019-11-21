import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  picked: state.recipes.picked,
})

const Recipe = props => {
  const recipe = props.picked;
  return (
    <div>
    <h2>レシピ画面</h2>
    <h3>{recipe.title}</h3>
    <span>費用: {recipe.cost}円, </span>
    <span>調理時間: {recipe.cookTime}分</span>
    <h3>材料</h3>
    <ul>
    {
      recipe.ingredients.map(line => <li>{line}</li>)
    }
    </ul>
    <h3>手順</h3>
    <ul>
    {
      recipe.directions.map(line => <li>{line}</li>)
    }
    </ul>
  </div>
  );
};

export default connect(mapStateToProps)(Recipe);