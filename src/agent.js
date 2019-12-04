const request = require("superagent");

const root = "https://cook-example.herokuapp.com";

const Recipes = {
  all: () => request.get(`${root}/recipes`),
  create: () => {},
};

const Profile = {
  get: account => request.get(`${root}/users/${account}`),
}

module.exports = {
  Recipes,
  Profile,
}