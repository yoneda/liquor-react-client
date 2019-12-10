import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import "./index.css";
import App from "./components/App";
import reducer from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("app")
);
