const request = require("superagent");

const root = "https://cook-example.herokuapp.com";

const Recipes = {
  all: () => request.get(`${root}/recipes`),
  get: id => request.get(`${root}/recipes/:${id}`),
  create: recipe => request.post(`${root}/recipes`).send(recipe),
  stared: account => request.get(`${root}/users/${account}/stars`),
  posted: account => request.get(`${root}/users/${account}/posted`)
};

const Profile = {
  get: account => request.get(`${root}/users/${account}`),
  edit: profile => request.post(`${root}/users/${account}`).send(profile)
};

export default {
  Recipes,
  Profile
};
