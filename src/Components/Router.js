import React from "react";
import { HashRouter as Router } from "react-router-dom";
import Home from "Routes/Home";
import Home from "Routes/TV";
import Home from "Routes/Search";

export default () => {
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" exact component={TV} />
      <Route path="/search" exact component={Search} />
    </>
  </Router>;
};
cl;
