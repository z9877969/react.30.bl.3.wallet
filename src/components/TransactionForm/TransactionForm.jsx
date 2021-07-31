import { Component } from "react";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

const TransactionForm = ({ dataForm, setDataForm, handleOpenCatList, handleFormSubmit }) => {
  const { date, time, category, sum, currency, comment } = dataForm;

  const handleDataChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };  

  return (
    <form onSubmit={handleFormSubmit}>
      <Button title="OK" type="submit" />
      <LabelInput
        cbOnChange={handleDataChange}
        type="date"
        title="День"
        name="date"
        value={date}
      />
      <LabelInput
        cbOnChange={handleDataChange}
        type="time"
        title="Время"
        name="time"
        value={time}
      />
      <LabelInput
        cbOnClick={handleOpenCatList}
        type="button"
        title="Категория"
        name="category"
        value={category}
      />
      <LabelInput
        cbOnChange={handleDataChange}
        title="Сумма"
        name="sum"
        value={sum}
        placeholder="Введите сумму"
      />
      <LabelInput
        cbOnChange={handleDataChange}
        type="button"
        title="Валюта"
        name="currency"
          
      />
      <LabelInput
        cbOnChange={handleDataChange}
        title="Комментарий"
        name="comment"
        value={comment}
        placeholder="Комментарий"
      />
    </form>
  );
};

export default TransactionForm;
