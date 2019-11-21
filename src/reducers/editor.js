const initialState = {
  title: "タイトル",
  cookTime: 10,
  cost: 500,
  ingredients: ["材料1","材料2","材料3"],
  directions: ["手順1","手順2","手順3"],
};

const reducer = (state = initialState, action) => state;

export default reducer;
