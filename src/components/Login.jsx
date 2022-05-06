import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const onLoginClick = () => {
    if (email === "admin" && password === "admin") {
      setMessage(<span>Successfully Logged-in!</span>);
    } else {
      setMessage(<span>Invalid login</span>);
    }
  };

  //   onLoginClick = async () => {
  //     var response = await fetch(
  //       `http://localhost:5000/users?email=${email}&password=${password}`,
  //       { method: "GET" }
  //     );

  //     var body = await response.json();
  //     console.log(body);

  //     if (body.length > 0) {
  //       setMessage(<span>Successfully Logged-in!</span>);
  //     } else {
  //       setMessage(<span>Invalid login</span>);
  //     }
  //   };

  return (
    <div>
      <h4>Login</h4>
      <div>
        <p>Email:</p>
        <input
          type="text"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div>
        <p>Password:</p>
        <input
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div>
        {message}
        <button onClick={onLoginClick}>Login</button>
      </div>
    </div>
  );
};
export default Login;
