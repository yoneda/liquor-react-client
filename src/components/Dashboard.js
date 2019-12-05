import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadStars, loadPosts } from "../actions/recipes";

const mapStateToProps = state => ({
  profile: state.profile,
  posts: state.recipes.posts,
  stars: state.recipes.stars
});

const mapDispatchToProps = dispatch => ({
  loadStars: account => loadStars(account)(dispatch),
  loadPosts: account => loadPosts(account)(dispatch)
});

const Dashboard = props => {
  const { posts, stars, loadStars, loadPosts } = props;
  const { name, bio } = props.profile;

  useEffect(() => {
    loadStars("smatsuoka");
  }, [stars]);

  useEffect(() => {
    loadPosts("smatsuoka");
  }, [posts]);

  return (
    <div>
      <h2>マイページ画面</h2>
      <div>名前: {name}</div>
      <div>自己紹介: {bio}</div>
      <div>
        <span>投稿したレシピ: </span>
        {posts.map(post => (
          <span>{post.title} </span>
        ))}
      </div>
      <div>
        <span>お気に入りしたレシピ: </span>
        {stars.map(star => (
          <span>{star.title} </span>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
