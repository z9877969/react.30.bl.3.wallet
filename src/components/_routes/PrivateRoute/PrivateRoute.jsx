import { Route, Redirect } from "react-router-dom";

// path = "/transaction/:transType";
// path = "/period/:transType";
// path = "/";

const PrivateRoute = ({ isAuth, path, component: Component }) => {
  return isAuth ? (
    <Route path={path} component={Component} />
  ) : (
    <Redirect to="/auth/login" />
  );
};

export default PrivateRoute;
