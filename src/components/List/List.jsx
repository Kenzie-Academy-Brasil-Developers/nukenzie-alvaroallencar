import { useState, useEffect } from "react";
import Card from "../Card/Card";

import "./List.css";

const List = ({ listTransactions, handleTransactions, NoCard }) => {
  // atribuindo a listTransactions a outro state:

  const [filteredTransactions, setFilteredTransactions] =
    useState(listTransactions);

  // alterando o estado dos botões de filtro:

  const [allselected, setAllSelected] = useState(true);
  const [incomeselected, setIncomeSelected] = useState(false);
  const [expenseSelected, setExpenseSelected] = useState(false);

  useEffect(() => {
    setFilteredTransactions(listTransactions);
    setAllSelected(true);
    setIncomeSelected(false);
    setExpenseSelected(false);
  }, [listTransactions]);

  // filtros das transações:

  const filterAll = () => {
    setFilteredTransactions(listTransactions);
    setAllSelected(true);
    setIncomeSelected(false);
    setExpenseSelected(false);
  };

  const filterIncome = () => {
    setFilteredTransactions(
      listTransactions.filter((transaction) => transaction.type === "Entrada")
    );
    setAllSelected(false);
    setIncomeSelected(true);
    setExpenseSelected(false);
  };

  const filterExpense = () => {
    setFilteredTransactions(
      listTransactions.filter((transaction) => transaction.type === "Saída")
    );
    setAllSelected(false);
    setIncomeSelected(false);
    setExpenseSelected(true);
  };

  return listTransactions.length > 0 ? (
    <section className="secondColumnPage">
      <div className="listHeader">
        <p>Resumo financeiro</p>
        <nav className="filterButtons">
          <ul className="buttonsList">
            <li>
              <button
                type="button"
                className={allselected ? "selected" : "unselected"}
                onClick={filterAll}
              >
                Todos
              </button>
            </li>
            <li>
              <button
                type="button"
                className={incomeselected ? "selected" : "unselected"}
                onClick={filterIncome}
              >
                Entradas
              </button>
            </li>
            <li>
              <button
                type="button"
                className={expenseSelected ? "selected" : "unselected"}
                onClick={filterExpense}
              >
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
