import { useEffect, useState } from "react";
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
  transType,
  incomesCatProp,
  costsCatProp,
  handleCloseTransaction,
  handleAddTransaction,
  postTransactionCat,
  setTransactionsCat,
}) => {
  const [isCatList, setIsCatList] = useState(false);
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

  const handleToggleCatList = () => setIsCatList((prev) => !prev);

  const setCategory = (category) => {
    setDataForm((prev) => ({ ...prev, category }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postTransactionApi({ data: dataForm, apiEnd: transType }).then(
      (transaction) => handleAddTransaction({ transaction, transType })
    );
    handleCloseTransaction();
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

  return !isCatList ? (
    <Section>
      <TransactionHeader
        transTitle={transType === "costs" ? "Расходы" : "Доходы"}
        handleCloseTransaction={handleCloseTransaction}
      />
      <TransactionForm
        handleFormSubmit={handleFormSubmit}
        dataForm={dataForm}
        setDataForm={setDataForm}
        handleToggleCatList={handleToggleCatList}
      />
    </Section>
  ) : (
    <Section>
      <CategoriesTransactions
        categories={transType === "incomes" ? incomesCatProp : costsCatProp}
        handleToggleCatList={handleToggleCatList}
        setCategory={setCategory}
      />
    </Section>
  );
};

export default TransactionPage;
