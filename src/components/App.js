import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">ホーム</Link> |{"" }
      <Link to="dashboard">マイページ</Link> |{" "}
      <Link to="settings">設定</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <Settings path="settings" />
    </Router>
  </div>
);

export default App;
