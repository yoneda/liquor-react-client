import React, { useState } from "react";
import { useLegacyState } from "../hooks";

const Register = () => {
  const [state, setState] = useLegacyState({
    account: "",
    mail: "",
    password: ""
  });
  return (
    <div>
      <h2>登録画面</h2>
      <div>
        アカウント名: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.account}
          onChange={event => setState({ account: event.target.value })}
        />
      </div>
      <div>
        メール: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.mail}
          onChange={event => setState({ mail: event.target.value })}
        />
      </div>
      <div>
        パスワード: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={state.password}
          onChange={event => setState({ password: event.target.value })}
        />
      </div>
      <br />
      <button onClick={() => console.log("ユーザ登録リクエストを送る")}>
        register
      </button>
    </div>
  );
};

export default Register;
