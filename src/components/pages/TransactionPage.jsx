import { useEffect, useState } from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionHeader from "../TransactionHeader/TransactionHeader";
import Section from "../_share/Section/Section";
import CategoriesTransactions from "../CategoriesTransactions/CategoriesTransactions";
import {
  postTransactionApi,
  getTransactionCatsApi,
} from "../../utils/apiService";
import { incomesCat, costsCat } from "../../assets/categoriesLists.json";

const TransactionPage = ({
  incomesCatProp,
  costsCatProp,
  handleAddTransaction,
  postTransactionCat,
  setTransactionsCat,
}) => {
  const history = useHistory();
  const {
    params: { transType },
    path,
    url,
  } = useRouteMatch();
  
  const [dataForm, setDataForm] = useState({
    date: "",
    time: "",
    category:
      transType === "incomes" ? incomesCat[0]["name"] : costsCat[0]["name"],
    sum: "",
    currency: "",
    comment: "",
  });

  const categories = transType === "incomes" ? incomesCat : costsCat;

  // const postTransaction = (transaction) => {};

  const handleGoBack = () => history.push(history.location.state?.from || "/");

  const handleOpenCatList = () =>
    history.push({
      pathname: url + "/cat-list",
      state: {
        from: history.location,
      },
    });

  const setCategory = (category) => {
    setDataForm((prev) => ({ ...prev, category }));
    handleGoBack();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postTransactionApi({ data: dataForm, apiEnd: transType }).then(
      (transaction) => handleAddTransaction({ transaction, transType })
    );
    handleGoBack();
  };

  useEffect(() => {
    transType === "incomes" &&
      incomesCatProp.length === 0 &&
      getTransactionCatsApi(transType + "Cat").then((categories) =>
        categories.length === 0
          ? incomesCat.forEach((category) =>
              postTransactionCat({ transType: transType + "Cat", category })
            )
          : setTransactionsCat({ transType, categories })
      );
    transType === "costs" &&
      costsCatProp.length === 0 &&
      getTransactionCatsApi(transType + "Cat").then((categories) =>
        categories.length === 0
          ? costsCat.forEach((category) =>
              postTransactionCat({ transType: transType + "Cat", category })
            )
          : setTransactionsCat({ transType, categories })
      );
  }, []);

  return (
    <Switch>
      <Route path={path + "/cat-list"}>
        <Section>
          <CategoriesTransactions
            categories={transType === "incomes" ? incomesCatProp : costsCatProp}
            handleGoBack={handleGoBack}
            setCategory={setCategory}
          />
        </Section>
      </Route>
      <Route path={path}>
        <Section>
          <TransactionHeader
            transTitle={transType === "costs" ? "Расходы" : "Доходы"}
            handleGoBack={handleGoBack}
          />
          <TransactionForm
            handleFormSubmit={handleFormSubmit}
            dataForm={dataForm}
            setDataForm={setDataForm}
            handleOpenCatList={handleOpenCatList}
          />
        </Section>
      </Route>
    </Switch>
  );
};

export default TransactionPage;
