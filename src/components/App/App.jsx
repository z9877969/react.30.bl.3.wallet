import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import TransactionsPerPeriod from "../pages/TransactionsPerPeriodPage";
import {
  getTransactionsApi,
  postTransactionCatApi,
} from "../../utils/apiService";
import "./App.css";

const App = () => {
  const [incomes, setIncomes] = useState([]);
  const [costs, setCosts] = useState([]);
  const [incomesCat, setIncomesCat] = useState([]);
  const [costsCat, setCostsCat] = useState([]);

  const handleAddTransaction = ({ transType, transaction }) => {
    transType === "incomes" && setIncomes((prev) => [...prev, transaction]);
    transType === "costs" && setCosts((prev) => [...prev, transaction]);
  };

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
    getTransactionsApi("incomes").then((incomes) => setIncomes(incomes));
    getTransactionsApi("costs").then((costs) => setCosts(costs));
  }, []);

  return (
    <>
      {/* <Route path="/" component={MainPage} />
      <Route
        path="/"
        render={() => (
          <MainPage handleOpenTransaction={handleOpenTransaction} />
        )}
      /> */}
      <Switch>
        <Route path="/transaction/:transType">
          <TransactionPage
            incomesCatProp={incomesCat}
            costsCatProp={costsCat}
            handleAddTransaction={handleAddTransaction}
            postTransactionCat={postTransactionCat}
            setTransactionsCat={setTransactionsCat}
          />
        </Route>
        <Route path="/period/:transType">
          <TransactionsPerPeriod costs={costs} incomes={incomes} />
        </Route>
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
};

export default App;
