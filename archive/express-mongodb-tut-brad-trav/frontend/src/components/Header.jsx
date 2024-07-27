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
              Login <FaSignInAlt />
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              Register
              <FaSignOutAlt />
            </Link>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
