import React, { useState } from "react";
import { useFormik } from "formik";
import { object, string } from "yup";
import Button from "./Button";

const Input = ({ type, label, onChange, value, name }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  );
};

const validationSchema = object({
  username: string().min(3),
  password: string().min(16),
});

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validationSchema: validationSchema,
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        label="Username"
        name="username"
        onChange={formik.handleChange}
        value={formik.values.username}
      />
      {formik.errors.username}
      <Input
        type="password"
        label="Password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password}
      <Button onClick={() => console.log(username + " " + password)}>
        SignIn
      </Button>
    </form>
  );
}

export default SignUp;
