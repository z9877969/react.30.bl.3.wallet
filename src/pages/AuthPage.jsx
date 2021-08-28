import { useDispatch } from "react-redux";
import AuthForm from "../components/AuthForm/AuthForm";
import { login, register } from "../redux/auth/authOperations";
import { registerApi } from "../utils/firebaseApi";

const AuthPage = ({ match }) => {
  const dispatch = useDispatch();
  const { params } = match;
  const handleSubmit = (dataForm) => {
    params.authType === "register"
      ? dispatch(register(dataForm))
      : dispatch(login(dataForm));
  };

  return <AuthForm authType={params.authType} handleSubmit={handleSubmit} />;
};

export default AuthPage;
