import React from "react";
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={img} alt="" />
        <h1>Page not found!</h1>
        <Link to="/dashboard">Home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h1>Something went Wrong!</h1>
      <Link to="/">Home</Link>
    </Wrapper>
  );
};

export default Error;
