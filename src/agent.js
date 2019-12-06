const request = require("superagent");

const root = "https://cook-example.herokuapp.com";

const Recipes = {
  all: () => request.get(`${root}/recipes`).then(res => res.body),
  get: id => request.get(`${root}/recipes/${id}`).then(res => res.body),
  create: recipe =>
    request
      .post(`${root}/recipes`)
      .query(recipe)
      .then(res => res.body),
  stared: account =>
    request.get(`${root}/users/${account}/stars`).then(res => res.body),
  posted: account =>
    request.get(`${root}/users/${account}/recipes`).then(res => res.body)
};

const Profile = {
  get: account => request.get(`${root}/users/${account}`).then(res => res.body),
  edit: (account, profile) =>
    request
      .put(`${root}/users/${account}`)
      .query(profile)
      .then(res => res.body)
};

export default {
  Recipes,
  Profile
};
