import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Settings from "./Settings";
import Login from "./Login";
import Register from "./Register";
import Editor from "./Editor";
import Recipe from "./Recipe";
import { Router, Link } from "@reach/router";

const App = () => (
  <div>
    <nav>
      <Link to="/">ホーム</Link> |{"" }
      <Link to="dashboard">マイページ</Link> |{" "}
      <Link to="settings">設定</Link> |{" "}
      <Link to="login">ログイン</Link> |{" "}
      <Link to="register">登録</Link> |{" "}
      <Link to="editor">新規投稿</Link>
    </nav>
    <Router>
      <Home path="/" />
      <Dashboard path="dashboard" />
      <Settings path="settings" />
      <Login path="login" />
      <Register path="register" />
      <Editor path="editor" />
    </Router>
  </div>
);

export default App;
