import Card from "../Card/Card";
import { useState } from "react";

import "./List.css";

const List = ({
  listTransactions,
  handleTransactions,
  setListTransactions,
  NoCard,
}) => {
  const [filteredTransactions, setFilteredTransactions] =
    useState(listTransactions);

  const filterAll = () => {
    const filteredAll = listTransactions.filter(
      (transaction) =>
        transaction.type === "Entrada" || transaction.type === "Saída"
    );
    console.log(filteredAll);
    setFilteredTransactions(filteredAll);
    console.log(filteredTransactions);
  };

  const filterIncome = () => {
    const filteredIncome = listTransactions.filter(
      (transaction) => transaction.type === "Entrada"
    );
    console.log(filteredIncome);
    setFilteredTransactions(filteredIncome);
    console.log(filteredTransactions);
  };

  const filterExpense = () => {
    const filteredExpanse = listTransactions.filter(
      (transaction) => transaction.type === "Saída"
    );
    console.log(filteredExpanse);
    setFilteredTransactions(filteredExpanse);
    console.log(filteredTransactions);
  };

  return listTransactions.length > 0 ? (
    <section className="secondColumnPage">
      <div className="listHeader">
        <p>Resumo financeiro</p>
        <nav className="filterButtons">
          <ul className="buttonsList">
            <li>
              <button type="button" onClick={filterAll}>
                Todos
              </button>
            </li>
            <li>
              <button type="button" onClick={filterIncome}>
                Entradas
              </button>
            </li>
            <li>
              <button type="button" onClick={filterExpense}>
                Despesas
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="transactionsList">
        {filteredTransactions.length > 0
          ? filteredTransactions.map((transaction, index) => {
              let color;
              if (transaction.type === "Entrada") {
                color = "3, 184, 152";
              } else {
                color = "134, 142, 150";
              }
              return (
                <li
                  className="transactionCard"
                  key={index}
                  style={{ borderLeft: `0.313em solid rgba(${color}, 1)` }}
                >
                  <Card
                    transaction={transaction}
                    handleTransactions={handleTransactions}
                  />
                </li>
              );
            })
          : listTransactions.map((transaction, index) => {
              let color;
              if (transaction.type === "Entrada") {
                color = "3, 184, 152";
              } else {
                color = "134, 142, 150";
              }
              return (
                <li
                  className="transactionCard"
                  key={index}
                  style={{ borderLeft: `0.313em solid rgba(${color}, 1)` }}
                >
                  <Card
                    transaction={transaction}
                    handleTransactions={handleTransactions}
                  />
                </li>
              );
            })}
      </ul>
    </section>
  ) : (
    <section className="secondColumnPage">
      <p>Você não possui nenhum lançamento :(</p>
      <img className="noCard" src={NoCard} alt="loading" />
    </section>
  );
};

export default List;
