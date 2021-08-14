import { useEffect, useState } from "react";
import { Switch, Route, useHistory, useRouteMatch } from "react-router-dom";
import TransactionForm from "../components/TransactionForm/TransactionForm";
import TransactionHeader from "../components/TransactionHeader/TransactionHeader";
import Section from "../components/_share/Section/Section";
import CategoriesTransactions from "../components/CategoriesTransactions/CategoriesTransactions";
import {
  incomesCat as defIncomesCat,
  costsCat as defCostsCat,
} from "../assets/categoriesLists.json";
import { addTransaction } from "../redux/transactions/transactionsOperations";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  getCostsCat,
  getIncomesCat,
} from "../redux/categories/categoriesOperations";
import {
  setEmptyCostsCats,
  setEmptyIncomesCats,
} from "../redux/categories/categoriesActions";
import { getFromLS, setToLS } from "../utils/apiLocalStorage";

const TransactionPage = ({ history, match }) => {
  const dispatch = useDispatch();
  const {
    params: { transType },
    path,
    url,
  } = match;

  const isEmpty = useSelector((state) => state.categories.isEmpty);
  const { incomesCat, costsCat } = useSelector((state) => state.categories);
  
  const lastCategories = getFromLS("lastCats");

  const [dataForm, setDataForm] = useState({
    date: "",
    time: "",
    category:
      (lastCategories &&
        lastCategories[transType] &&
        lastCategories[transType]) ||
      (transType === "incomes" && defIncomesCat[0].name) ||
      defCostsCat[0].name,
    sum: "",
    currency: "",
    comment: "",
  });

  const categories = transType === "incomes" ? incomesCat : costsCat;

  const handleGoBack = () => history.push(history.location.state?.from || "/");

  const handleOpenCatList = () =>
    history.push({
      pathname: url + "/cat-list",
      state: {
        from: history.location,
      },
    });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTransaction({ transType, transaction: dataForm }));
    handleGoBack();
  };

  const handleSetCategory = (category) => {
    setDataForm((prev) => ({ ...prev, category }));
    handleGoBack();
  };

  useEffect(() => {
    transType === "incomes" &&
      incomesCat.length === 0 &&
      dispatch(getIncomesCat());
    transType === "costs" && costsCat.length === 0 && dispatch(getCostsCat());
  }, []);

  useEffect(() => {
    const { costs: isCostsEmpty, incomes: isIncomesEmpty } = isEmpty;
    isIncomesEmpty &&
      defIncomesCat.forEach((category, idx) => {
        idx === 0 && dispatch(setEmptyIncomesCats(false));
        dispatch(addCategory({ transType, category }));
      });

    isCostsEmpty &&
      defCostsCat.forEach((category, idx) => {
        idx === 0 && dispatch(setEmptyCostsCats(false));
        dispatch(addCategory({ transType, category }));
      });
  }, [isEmpty.costs, isEmpty.incomes]);

  useEffect(() => {
    if (categories[0]) {
      setDataForm((prev) => ({ ...prev, category: categories[0].name }));
      lastCategories
        ? setToLS("lastCats", {
            ...lastCategories,
            [transType]: categories[0].name,
          })
        : setToLS("lastCats", { [transType]: categories[0].name });
    }
  }, [categories[0]]);

  // console.log("transactionPage");

  return (
    <Switch>
      <Route path={path + "/cat-list"}>
        <Section>
          <CategoriesTransactions
            categories={categories}
            handleGoBack={handleGoBack}
            handleSetCategory={handleSetCategory}
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
