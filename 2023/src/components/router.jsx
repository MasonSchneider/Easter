import * as React from "react";
import { Switch, Route, Router } from "wouter";
import Home from "../pages/home";
import Maggie from "../pages/maggie";
import Reagan from "../pages/reagan";
import Eliza from "../pages/eliza";
import Jamie from "../pages/jamie";

export default () => (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/maggie" component={Maggie} />
      <Route path="/reagan" component={Reagan} />
      <Route path="/eliza" component={Eliza} />
      <Route path="/jamie" component={Jamie} />
    </Switch>
);
