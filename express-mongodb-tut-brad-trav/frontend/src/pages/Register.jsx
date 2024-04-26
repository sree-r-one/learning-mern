import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={onChange}
            placeholder="Please enter your name"
          />
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
          <input
            type="password"
            className="form-control"
            id="password2"
            name="password2"
            value={password2}
            onChange={onChange}
            placeholder="Confirm your password"
          />
        </form>

        <button type="submit"> Submit</button>
      </section>
    </>
  );
};

export default Register;
