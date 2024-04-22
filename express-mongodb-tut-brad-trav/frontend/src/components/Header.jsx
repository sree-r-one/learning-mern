import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>Goal Setter</Link>

        <ul>
          <li>
            <Link to={"/login"}>
              Sign in <FaSignInAlt />
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              Sign out
              <FaSignOutAlt />
            </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
