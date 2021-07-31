import { Link, useParams } from "react-router-dom";
import Section from "../_share/Section/Section";
import ButtonGoBack from "../ButtonGoBack/ButtonGoBack";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

const options = [
  {
    value: "day",
    title: "День",
  },
  {
    value: "week",
    title: "Неделя",
  },
  {
    value: "month",
    title: "Месяц",
  },
  {
    value: "year",
    title: "Год",
  },
  {
    value: "allTime",
    title: "Всё время",
  },
];

const TransactionsPerPeriodPage = (props) => {
  const { transType } = useParams();

  // const transactions = transType === "incomes" ? incomes : costs;
  const transactions = props[transType];

  const allSum = transactions.reduce((acc, el) => acc + Number(el.sum), 0);

  return (
    <Section>
      <ButtonGoBack title="GoBAck" />
      <select name="period">
        {options.map(({ value, title }) => (
          <option value={value} key={value}>
            {title}
          </option>
        ))}
      </select>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button title="<" />

        <LabelInput title="июль 2021" type="date" name="date" />

        <Button title=">" />
      </div>
      <table>
        <tr>
          <th>ВСЕГО:</th>
          <th>{allSum}</th>
        </tr>
        {transactions.map((transaction) => (
          <tr>
            <td>{transaction.category}</td>
            <td>
              <span>{transaction.sum}</span>
              <Link to="">{">"}</Link>
            </td>
          </tr>
        ))}
      </table>
    </Section>
  );
};

export default TransactionsPerPeriodPage;
