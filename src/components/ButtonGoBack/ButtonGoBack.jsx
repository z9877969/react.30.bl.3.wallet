import { useHistory } from "react-router-dom";
import Button from "../_share/Button/Button";

const ButtonGoBack = ({ title }) => {
  const { push, location } = useHistory();

  const handleGoBack = () => push(location.state?.from || "/");
  return <Button title={title} cbOnClick={handleGoBack} />;
};

export default ButtonGoBack;
