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
  posts: [recipeGen("カプレーゼ"),recipeGen("カルボナーラ"),recipeGen("マルゲリータ")],
  stars: [recipeGen("ローストビーフ"),recipeGen("ジェノベーゼ"),recipeGen("ペンネリガータ")],
  rankings: [recipeGen("おでん"),recipeGen("麻婆豆腐"),recipeGen("餃子")],
  arrivals: [recipeGen("ラム肉のグリル"),recipeGen("ブルーチーズのパスタ"),recipeGen("トリュフのパスタ")],
};

const reducer = (state = initialState, action) => state;

export default reducer;
