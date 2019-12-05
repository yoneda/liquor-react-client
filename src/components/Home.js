import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadRecipes } from "../actions/recipes";

const mapStateToProps = state => ({
  rankings: state.recipes.rankings,
  arrivals: state.recipes.arrivals
});

const mapDispatchToProps = dispatch => ({
  loadRecipes: () => loadRecipes()(dispatch)
});

const Home = props => {
  const { rankings, arrivals, loadRecipes } = props;

  useEffect(() => {
    loadRecipes();
  }, [arrivals]);

  return (
    <div>
      <h2>ホーム画面</h2>
      <div>
        <span>新着: </span>
        {arrivals.map((recipe, index) => (
          <span key={index}>{recipe.title} </span>
        ))}
      </div>
      <div>
        <span>ランキング: </span>
        {rankings.map((recipe, index) => (
          <span key={index}>{recipe.title} </span>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
