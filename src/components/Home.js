import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  rankings: state.rankings,
  arrivals: state.arrivals
});

const Home = props => {
  const { rankings, arrivals } = props;
  return (
    <div>
      <h3>新着</h3>
      <ul>
        {
          rankings.map(recipe => <li>{recipe.title}</li>)
        }
      </ul>
      <h3>ランキング</h3>
      <ul>
        {
          arrivals.map(recipe => <li>{recipe.title}</li>)
        }
      </ul>
    </div>
  );
};

export default connect(mapStateToProps)(Home);
