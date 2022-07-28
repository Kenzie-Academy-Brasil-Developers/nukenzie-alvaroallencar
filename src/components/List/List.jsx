import { useState, useEffect } from "react";
import Card from "../Card/Card";

import "./List.css";

const List = ({ listTransactions, handleTransactions, NoCard }) => {
  // atribuindo a listTransactions a outro state:

  const [filteredTransactions, setFilteredTransactions] =
    useState(listTransactions);

  useEffect(() => {
    setFilteredTransactions(listTransactions);
  }, [listTransactions]);

  // filtros das transações:

  const filterAll = () => {
    setFilteredTransactions(listTransactions);
  };

  const filterIncome = () => {
    setFilteredTransactions(
      listTransactions.filter((transaction) => transaction.type === "Entrada")
    );
  };

  const filterExpense = () => {
    setFilteredTransactions(
      listTransactions.filter((transaction) => transaction.type === "Saída")
    );
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
        {filteredTransactions.map((transaction, index) => {
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
