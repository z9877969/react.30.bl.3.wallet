import { Component } from "react";
import LabelInput from "../_share/LabelInput/LabelInput";
import Button from "../_share/Button/Button";

class TransactionForm extends Component {
  state = {
    date: "",
    time: "",
    category: "",
    sum: "",
    currency: "",
    comment: "",
  };

  handleDataChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.postTransaction(this.state);
  };

  render() {
    const { date, time, category, sum, currency, comment } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <Button title="OK" type="submit" />
        <LabelInput
          cbOnChange={this.handleDataChange}
          type="date"
          title="День"
          name="date"
          value={date}
        />
        <LabelInput
          cbOnChange={this.handleDataChange}
          type="time"
          title="Время"
          name="time"
          value={time}
        />
        <LabelInput
          cbOnChange={this.handleDataChange}
          type="button"
          title="Категория"
          name="category"
          value="Eat"
        />
        <LabelInput
          cbOnChange={this.handleDataChange}
          title="Сумма"
          name="sum"
          value={sum}
          placeholder="Введите сумму"
        />
        <LabelInput
          cbOnChange={this.handleDataChange}
          type="button"
          title="Валюта"
          name="currency"
          value="UAH"
        />
        <LabelInput
          cbOnChange={this.handleDataChange}
          title="Комментарий"
          name="comment"
          value={comment}
          placeholder="Комментарий"
        />
      </form>
    );
  }
}

export default TransactionForm;
