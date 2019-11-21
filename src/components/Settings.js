import React, { useState } from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  profile: state.profile.profile
});

// MEMO: 値は復帰時にはキープしないためローカルstateを利用
const Settings = props => {
  const { name, bio, mail, pass } = props.profile;
  return (
    <div>
      <h2>設定画面</h2>
      <div>名前: {name}</div>
      <div>自己紹介: {bio}</div>
      <div>アカウント: {mail}</div>
      <div>パスワード: {pass}</div>
    </div>
  );
};

export default connect(mapStateToProps)(Settings);
