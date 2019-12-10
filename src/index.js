import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import "./index.css";
import App from "./components/App";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});
render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
