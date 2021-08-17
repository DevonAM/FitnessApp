import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        FitnessApp
      </Link>
      <div className="right menu">
        <Link className="item" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="item" to="/Signup">
          Sign Up
        </Link>
        <Link className="item" to="/Signin">
          Sign In
        </Link>
        <Link className="item" to="/Account">
          Account
        </Link>
        <Link className="item">Sign Out</Link>
      </div>
    </div>
  );
};

export default Navbar;

// <div class="ui inverted top fixed menu">
// <a class="header item">Fitness App</a>
// <a class="item">Home</a>
// </div>
