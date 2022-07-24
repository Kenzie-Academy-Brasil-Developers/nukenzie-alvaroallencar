import "./Card.css";

import { FaTrashAlt } from "react-icons/fa";

const Card = ({ transaction, handleTransactions }) => (
  <>
    <div className="cardFirstColumn">
      <p className="descriptionText">{transaction.description}</p>
      <p className="transactionType">{transaction.type}</p>
    </div>
    <div className="cardSecondColumn">
      <p>{`$ ${transaction.value.toFixed(2)}`}</p>
    </div>
    <div className="cardThirdColumn">
      <button onClick={() => handleTransactions(transaction)}>
        <FaTrashAlt />
      </button>
    </div>
  </>
);

export default Card;
