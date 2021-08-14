import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsPerPeriod from "../../pages/TransactionsPerPeriodPage";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import { getTransactions } from "../../redux/transactions/transactionsSelector";
import { postTransactionCatApi } from "../../utils/apiService";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { costs, incomes } = useSelector(getTransactions);

  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

  const setTransactionsCat = ({ categories, transType }) => {
    transType === "incomes" && setIncomesCat(categories);
    transType === "costs" && setCostsCat(categories);
  };

  const postTransactionCat = ({ transType, category }) =>
    postTransactionCatApi({ apiEnd: transType, category }).then((category) => {
      transType === "incomes" && setIncomesCat((prev) => [...prev, category]);
      transType === "costs" && setCostsCat((prev) => [...prev, category]);
    });

  useEffect(() => {
    !costs.length && dispatch(getIncomes());
    !incomes.length && dispatch(getCosts());
  }, []);

  return (
    <>
      <Switch>
        <Route path="/transaction/:transType" component={TransactionPage} />
        <Route path="/period/:transType" component={TransactionsPerPeriod} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
