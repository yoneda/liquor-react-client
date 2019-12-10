import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import { Router } from "@reach/router";

const App = () => (
  <div>
    <h2>Liquor Search App</h2>
    <Router>
      <Home path="/" />
      <Detail path="detail/:id" />
    </Router>
  </div>
);

export default App;
