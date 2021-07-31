import { useHistory, useLocation } from "react-router-dom";
import Button from "../_share/Button/Button";
import css from "./MainInfo.module.css";

const MainInfo = ({ dataMainInfo, title, btnTitle, transType }) => {
  const history = useHistory();
  // const location = useLocation()

  const newLocation = {
    pathname: "/transaction/" + transType,
    state: {
      surprize: "surprize",
      from: history.location,
    },
  };

  const handleOpenTransaction = () => history.push(newLocation);

  return (
    <section className={css.container}>
      <h2>{title}</h2>
      <p>UAH</p>

      <ul>
        {dataMainInfo.map((el) => (
          <li key={el.period}>
            <span>{el.period}</span>
            <span>{el.total}</span>
          </li>
        ))}
      </ul>
      <Button title={btnTitle} cbOnClick={handleOpenTransaction} />
    </section>
  );
};

export default MainInfo;
