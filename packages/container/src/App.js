import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HelloReactApp from "./components/HelloReactApp";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import HelloVueApp from "./components/HelloVueApp";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <p>Some more changes coming here!!!</p>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code>
      </p>

      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        learn some more good stuff
      </a>
    </header>
    <title>Dashboard</title>
    <Link to="/">Home</Link>
    <br />
    <Link to="/react">MFE - React App</Link>
    <br />
    <Link to="/vue">MFE - xVue App</Link>
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
      </Switch>
    </Router>
  );
};
