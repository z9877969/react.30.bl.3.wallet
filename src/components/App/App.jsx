import { Component } from "react";
import MainPage from "../pages/MainPage";
import TransactionPage from "../pages/TransactionPage";
import "./App.css";

class App extends Component {
  state = {
    transType: "",
  };

  handleOpenTransaction = (transType) => {
    this.setState({ transType });
  };

  handleCloseTransaction = () => {
    this.setState({ transType: "" });
  };

  render() {
    const { transType } = this.state;
    return (
      <>
        {!transType ? (
          <MainPage handleOpenTransaction={this.handleOpenTransaction} />
        ) : (
          <TransactionPage
            transType={transType}
            handleCloseTransaction={this.handleCloseTransaction}
          />
        )}
      </>
    );
  }
}

export default App;
