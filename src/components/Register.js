import React, { useState } from "react";

const Register = () => {
  const [account, setAccount] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h2>設定画面</h2>
      <div>
        アカウント名: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={account}
          onChange={event => setAccount(event.target.value)}
        />
      </div>
      <div>
        メール: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={mail}
          onChange={event => setMail(event.target.value)}
        />
      </div>
      <div>
        パスワード: <br />
        <input
          type="text"
          style={{ width: "300px" }}
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </div>
      <br />
      <button onClick={() => console.log("ユーザ登録リクエストを送る")}>
        save
      </button>
    </div>
  );
};

export default Register;
