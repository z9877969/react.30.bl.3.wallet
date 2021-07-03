import Button from "../_share/Button/Button";
import css from "./MainInfo.module.css";

const MainInfo = ({
  dataMainInfo,
  title,
  btnTitle,
  transType,
  handleOpenTransaction,
}) => {
  const cbOnClick = () => handleOpenTransaction(transType);

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
      <Button title={btnTitle} cbOnClick={cbOnClick} />
    </section>
  );
};

export default MainInfo;
