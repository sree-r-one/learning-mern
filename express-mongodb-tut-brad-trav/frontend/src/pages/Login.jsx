import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Please login</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={name}
            onChange={onChange}
            placeholder="Please enter your email"
          />
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            placeholder="Please enter your password"
          />
        </form>

        <button type="submit"> Submit</button>
      </section>
    </>
  );
};

export default Login;
