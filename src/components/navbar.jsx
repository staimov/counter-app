import React, { Component } from "react";
import logo from "../logo.svg";

// stateless functional component
const NavBar = (props) => {
    return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              style={{ height: "60px" }}
              className="App-logo"
              alt="app logo"
            />
            Counters App{" "}
            <span className="badge rounded-pill bg-info m-2">{props.totalCounters}</span>
          </a>
        </div>
      </nav>
    );
};

export default NavBar;
