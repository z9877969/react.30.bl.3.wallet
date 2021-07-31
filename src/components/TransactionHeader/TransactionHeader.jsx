import Button from "../_share/Button/Button";

const TransactionHeader = ({ transTitle, handleGoBack }) => {
  return (
    <>
      <Button title="GoBack" cbOnClick={handleGoBack} />
      <h1>{transTitle}</h1>
    </>
  );
};

export default TransactionHeader;
