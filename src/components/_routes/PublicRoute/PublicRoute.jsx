import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ isAuth, component: Component, path }) => {
  return !isAuth ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export default PublicRoute;
