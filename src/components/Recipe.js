import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  picked: state.recipes.picked
});

const Recipe = props => {
  const { picked } = props;
  return (
    <div>
      <h2>レシピ画面</h2>
      <div>タイトル: {picked.title}</div>
      <div>費用: {picked.cost}円, </div>
      <div>調理時間: {picked.cookTime}分</div>
      <div>
        <span>材料: </span>
        {picked.ingredients.split(",").map(line => (
          <span>{line} </span>
        ))}
      </div>
      <div>
        <span>手順: </span>
        {picked.directions.split(",").map(line => (
          <span>{line} </span>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Recipe);
