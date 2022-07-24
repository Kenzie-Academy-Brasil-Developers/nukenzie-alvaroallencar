import Card from "../Card/Card";

import "./List.css";

const List = ({
  listTransactions,
  handleTransactions,
  setListTransactions,
}) => {
  const allTransactions = listTransactions;

  const filterAll = () => {
    return setListTransactions(allTransactions);
  };
  const filterIncome = () => {
    setListTransactions(allTransactions);
    return setListTransactions(
      allTransactions.filter((transaction) => transaction.type === "Entrada")
    );
  };
  const filterExpense = () => {
    setListTransactions(allTransactions);
    return setListTransactions(
      allTransactions.filter((transaction) => transaction.type === "Saída")
    );
  };
  return (
    <section className="secondColumnPage">
      <div className="listHeader">
        <p>Resumo financeiro</p>
        <nav className="filterButtons">
          <ul className="buttonsList">
            <li>
              <button onClick={filterAll}>Todos</button>
            </li>
            <li>
              <button onClick={filterIncome}>Entradas</button>
            </li>
            <li>
              <button onClick={filterExpense}>Despesas</button>
            </li>
          </ul>
        </nav>
      </div>
      <ul className="transactionsList">
        {listTransactions.map((transaction, index) => {
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
              style={{ borderLeft: `0.25em solid rgba(${color}, 1)` }}
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
  );
};

export default List;
