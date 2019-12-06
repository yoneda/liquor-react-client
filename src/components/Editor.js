import React from "react";
import { useLegacyState } from "../hooks";
import { createRecipe } from "../actions/recipes";

const Editor = props => {
  const [state, setState] = useLegacyState({
    title: "",
    cookTime: undefined,
    cost: undefined,
    ingredients: "",
    directions: ""
  });
  return (
    <div>
      <h2>新規投稿</h2>
      <div>
        レシピ名: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.title}
          onChange={event => setState({ title: event.target.value })}
        />
      </div>
      <div>
        時間: <br />
        <input
          type="number"
          style={{ width: "300px" }}
          value={state.cookTime}
          onChange={event => setState({ cookTime: event.target.value })}
        />
      </div>
      <div>
        費用: <br />
        <input
          type="number"
          style={{ width: "300px" }}
          value={state.cost}
          onChange={event => setState({ cost: event.target.value })}
        />
      </div>

      <div>
        材料: ※カンマ区切り
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.ingredients}
          onChange={event => setState({ ingredients: event.target.value })}
        />
      </div>
      <div>
        手順: ※カンマ区切り
        <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.directions}
          onChange={event => setState({ directions: event.target.value })}
        />
      </div>
      <br />
      <button
        onClick={() => {
          const recipe = state;
          const created = createRecipe({ ...recipe, account: "smatsuoka" });
          console.log(`レシピが作成された。${created}`);
        }}
      >
        ok
      </button>
    </div>
  );
};

export default Editor;