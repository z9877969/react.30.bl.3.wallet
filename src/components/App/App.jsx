import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../_routes/PrivateRoute/PrivateRoute";
import PublicRoute from "../_routes/PublicRoute/PublicRoute";
import AuthPage from "../../pages/AuthPage";
import MainPage from "../../pages/MainPage";
import TransactionPage from "../../pages/TransactionPage";
import TransactionsPerPeriod from "../../pages/TransactionsPerPeriodPage";
import Navigation from "../_navigation/Navigation/Navigation";
import {
  getCosts,
  getIncomes,
} from "../../redux/transactions/transactionsOperations";
import { getTransactions } from "../../redux/transactions/transactionsSelector";
import { postTransactionCatApi } from "../../utils/apiService";
import "./App.css";
import { getUser } from "../../redux/auth/authOperations";

const App = () => {
  const dispatch = useDispatch();
  const { costs, incomes } = useSelector(getTransactions);
  const idToken = useSelector((state) => state.auth.user.idToken);
  const isAuth = useSelector((state) => state.auth.isAuth);

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
    idToken && dispatch(getUser());
  }, []);

  useEffect(() => {
    if (isAuth) {
      !costs.length && dispatch(getIncomes());
      !incomes.length && dispatch(getCosts());
    }
  }, [isAuth]);

  return (
    <>
      <Navigation isAuth={isAuth} />
      <Switch>
        <PrivateRoute
          isAuth={isAuth}
          path="/transaction/:transType"
          component={TransactionPage}
        />
        <PrivateRoute
          isAuth={isAuth}
          path="/period/:transType"
          component={TransactionsPerPeriod}
        />
        <PublicRoute
          isAuth={isAuth}
          component={AuthPage}
          path="/auth/:authType"
        />
        <PrivateRoute isAuth={isAuth} path="/" component={MainPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
