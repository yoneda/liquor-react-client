import React, { useEffect } from "react";
import { connect } from "react-redux";
import agent from "../agent";
import { async } from "q";

const mapStateToProps = state => ({
  rankings: state.recipes.rankings,
  arrivals: state.recipes.arrivals
});

const Home = props => {
  const { rankings, arrivals } = props;

  useEffect(() => {
    const fetchData = async () => {
      const recipes = await agent.Recipes.all().then(
        result => result.body.recipes
      );
      return recipes;
    }
    fetchData().then(result => console.log(result));
  });

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

export default connect(mapStateToProps)(Home);
