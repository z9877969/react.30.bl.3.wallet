import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const Navigation = ({ isAuth }) => {
  return <header>{isAuth ? <UserNav /> : <AuthNav />}</header>;
};

export default Navigation;
