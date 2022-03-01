import React from "react";

const history = createBrowserHistory();

const Header = () => (
  <div>
    <title>Dashboard</title>
    <Link to="/">Home</Link>
    <br />
    <Link to="/react">MFE - React App</Link>
    <br />
    <Link to="/vue">MFE - Vue App</Link>
  </div>
);

export default () => {
  return <Header />;
};
