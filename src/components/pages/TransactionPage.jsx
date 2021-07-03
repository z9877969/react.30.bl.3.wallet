import TransactionForm from "../TransactionForm/TransactionForm";
import TransactionHeader from "../TransactionHeader/TransactionHeader";
import Section from "../_share/Section/Section";

const TransactionPage = ({ transType, handleCloseTransaction }) => {
  const postTransaction = (transaction) => {
    const dataFromLS = localStorage.getItem(transType);
    const data = !dataFromLS ? [] : JSON.parse(dataFromLS);
    const dataToLS = [...data, transaction];
    localStorage.setItem(transType, JSON.stringify(dataToLS));
    handleCloseTransaction();
  };

  return (
    <Section>
      <TransactionHeader
        transTitle={transType === "costs" ? "Расходы" : "Доходы"}
        handleCloseTransaction={handleCloseTransaction}
      />
      <TransactionForm postTransaction={postTransaction} />
    </Section>
  );
};

export default TransactionPage;
