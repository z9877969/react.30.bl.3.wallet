import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../components/_share/Section/Section";
import ButtonGoBack from "../components/ButtonGoBack/ButtonGoBack";
import LabelInput from "../components/_share/LabelInput/LabelInput";
import Button from "../components/_share/Button/Button";
import { getTransactions } from "../redux/transactions/transactionsSelector";

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

const TransactionsPerPeriodPage = ({ match }) => {
  const { transType } = match.params;
  const allTransactions = useSelector(getTransactions);

  // const transactions = transType === "incomes" ? incomes : costs;
  const transactions = allTransactions[transType];

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
        <Button title="prev" />

        <LabelInput title="июль 2021" type="date" name="date" />

        <Button title="next" />
      </div>
      <table>
        <tr>
          <th>ВСЕГО:</th>
          <th>{allSum}</th>
        </tr>
        {transactions.map((transaction, idx) => (
          <tr key={idx}>
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
