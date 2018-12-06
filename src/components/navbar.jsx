import React, { Component } from "react";

//stateless functional components
const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill badge-primary m-2">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;
