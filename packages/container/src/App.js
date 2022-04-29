import React from "react";
import HelloReactApp from "./components/HelloReactApp";
import { Route, Switch, Router, Link, PrivateRoute } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from "./components/HelloVueApp";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <title>Dashboard</title>
    <Link to="/">Home</Link>
    <br />
    <Link to="/react">MFE React App</Link>
    <br />
    <Link to="/vue">MFE Vue App</Link>
    <br />
    <Link to="/app1">App1</Link>
  </div>
);

export default () => {
  return (
    <Router history={history}>
      <Header />
      <hr />
      <Switch>
        <Route path="/vue" component={HelloVueApp} />
        <Route path="/react" component={HelloReactApp} />
        <Route path="/" component={HelloReactApp} />
        <Route path="/app1" />
        <PrivateRoute
          path="/admin"
          component={HelloReactApp}
          isAuthenticated={true}
        />
      </Switch>
    </Router>
  );
};
