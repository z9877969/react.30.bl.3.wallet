import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authActions";
import Button from "../../_share/Button/Button";

const UserNav = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  return <Button title="LogOut" cbOnClick={handleLogOut} />;
};

export default UserNav;
