import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-expand-md ">
      <Link to="/" className="navbar-brand ">
        ACSES
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/clubs" className="nav-link">
              Clubs
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
