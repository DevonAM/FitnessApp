import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PageOne from "./PageOne";
import { Link } from "react-router-dom";

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Navigate to PageOne</Link>
    </div>
  );
};
const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/PageTwo" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;

// <div class="ui inverted top fixed menu">
// <a class="header item">Fitness App</a>
// <a class="item">Home</a>
// </div>
