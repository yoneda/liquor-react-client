import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  editor: state.editor,
});

const Editor = props => {
  const { title, cookTime, cost, ingredients, directions } = props.editor;
  return (
    <div>
      <h2>新規投稿</h2>
      <div>タイトル: {title}</div>
      <div>調理時間: {cookTime}分</div>
      <div>費用: {cost}円</div>
      <div>
        <span>材料: </span>
        {ingredients.map(ingredient => (
          <span>{ingredient}</span>
        ))}
      </div>
      <div>
        <span>手順: </span>
        {directions.map(direction => (
          <span>{direction}</span>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Editor);
