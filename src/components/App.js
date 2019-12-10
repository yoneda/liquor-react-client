import React from "react";
import Home from "./Home";
import Detail from "./Detail";
import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">カクテルホーム</Link> | <Link to="detail">カクテル詳細</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Detail path="detail/:id" />
    </Router>
  </div>
);

export default App;
