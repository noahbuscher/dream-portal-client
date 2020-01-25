import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const render = props =>
    isAuthenticated ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

export default PrivateRoute;