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
    <div>タイトル: {recipe.title}</div>
    <div>費用: {recipe.cost}円, </div>
    <div>調理時間: {recipe.cookTime}分</div>
    <div>
      <span>材料: </span>
      {
        recipe.ingredients.map(line => <span>{line} </span>)
      }
    </div>
    <div>
      <span>手順: </span>
      {
        recipe.directions.map(line => <span>{line} </span>)
      }
    </div>
  </div>
  );
};

export default connect(mapStateToProps)(Recipe);