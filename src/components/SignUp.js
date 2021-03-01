import React, { useState, useRef } from "react";
import styles from "./Signup.module.css";
import Button from "./Button";

const Input = ({ type, label, onChange, value }) => {
  return (
    <div>
      <label for={label}>{label}</label>
      <input type={type} name={label} onChange={onChange} value={value} />
    </div>
  );
};

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Input
        type="text"
        label="Username"
        onChange={(evt) => {
          setUsername(evt.target.value);
        }}
        value={username}
      />
      <Input
        type="password"
        label="Password"
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
        value={password}
      />
      <Button onClick={() => console.log(username + " " + password)}>
        SignIn
      </Button>
    </div>
  );
};

const App = () => {
  return <SignUp />;
};

export default App;
