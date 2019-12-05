import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRecipes } from "../actions/recipes";

const mapStateToProps = state => ({
  arrivals: state.recipes.arrivals
});

const mapDispatchToProps = dispatch => ({
  loadRecipes: () => loadRecipes()(dispatch)
});

const Home = props => {
  const { arrivals, loadRecipes } = props;

  useEffect(() => {
    if (arrivals.length === 0) loadRecipes();
  }, [arrivals]);

  return (
    <div>
      <h2>ホーム画面</h2>
      <div>
        <div>新着: </div>
        {arrivals.map((recipe, index) => (
          <div key={index}>{recipe.title} </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
