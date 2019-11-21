import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  rankings: state.recipes.rankings,
  arrivals: state.recipes.arrivals
});

const Home = props => {
  const { rankings, arrivals } = props;
  return (
    <div>
      <h2>ホーム画面</h2>
      <div>
        <span>新着: </span>
        {
          arrivals.map(recipe => <span>{recipe.title} </span>)
        }
      </div>
      <div>
        <span>ランキング: </span>
        {
          rankings.map(recipe => <span>{recipe.title} </span>)
        }
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
