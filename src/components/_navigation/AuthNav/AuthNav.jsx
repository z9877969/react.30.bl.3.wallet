import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/auth/login">LogIn</NavLink>
      </li>
      <li>
        <NavLink to="/auth/register">SignUp</NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
