import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

const Dashboard = () => (
  <div>
    <h2>マイページ画面</h2>
  </div>
);

export default connect(mapStateToProps)(Dashboard);
