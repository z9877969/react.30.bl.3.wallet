import Button from "../_share/Button/Button";

const TransactionHeader = ({ transTitle, handleCloseTransaction }) => {
  return (
    <>
      <Button title="GoBack" cbOnClick={handleCloseTransaction} />
      <h1>{transTitle}</h1>
    </>
  );
};

export default TransactionHeader;
