import React from "react";

import { FaSearch } from "react-icons/fa";
import logo from "../../../assets/img/logo.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_container-inner">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="menu">
            <a href="/">Sell</a>
            <a href="/">Marketplace</a>
            <a href="/">Community</a>
            <a href="/">Develop</a>
            <a href="/">Rescources</a>
          </div>

          <div className="custom_block">
            <div className="login">
              <a href="/">Log In</a>
            </div>
            <div className="get_start">
              <button>Get Started</button>
            </div>
            <div className="search">
              <FaSearch />
              <input type="search" name="search" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
