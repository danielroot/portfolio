import React from "react";
import { Switch, Route } from "react-router";

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/portfolio" />
    <Route path="/project/:id" />
    <Route exact path="/playground" />
  </Switch>
);
