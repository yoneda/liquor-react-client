import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addCount, subCount, resetCount } from "../actions/counter";

const mapStateToProps = state => ({
  count: state.count,
});

const mapDispatchToProps = dispatch => ({
  addCount: bindActionCreators(addCount, dispatch),
  subCount: bindActionCreators(subCount, dispatch),
  resetCount: bindActionCreators(resetCount, dispatch),
});

const MainContainer = ({ count, addCount, subCount, resetCount }) => {
  return (
    <div>
      <div>counter app</div>
      <div>
        <div>value: {count}</div>
        <button onClick={() => addCount()}>+</button>
        <button onClick={() => subCount()}>-</button>
        <button onClick={() => resetCount()}>reset</button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
