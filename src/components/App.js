import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "../views/Dashboard";
import Signin from "../views/Signin";
import Signup from "../views/Signup";
import Account from "../views/Account";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/Dashboard" exact component={Dashboard} />
          <Route path="/Signin" exact component={Signin} />
          <Route path="/Signup" exact component={Signup} />
          <Route path="/Account" exact component={Account} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
