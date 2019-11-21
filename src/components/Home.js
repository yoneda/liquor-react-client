import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
  rankings: state.rankings,
  arrivals: state.arrivals,
});

const Home = props => {
    const { rankings, arrivals } = props;
    console.log(rankings);
    console.log(arrivals);
    return (
        <div>
          <h3>新着</h3>
          <h3>ランキング</h3>
        </div>
    );
};

export default connect(mapStateToProps)(Home);
