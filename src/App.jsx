import { useState } from "react";
import NuKenzie from "./assets/img/NuKenzie.svg";

import Header from "./components/Header/Header.jsx";
// import Footer from "./components/Footer/index.jsx";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";

import "./base.css";
import "./reset.css";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "Entrada", value: 2500 },
    // { description: "Conta de luz", type: "Saída", value: -150 },
  ]);

  const handleTransactions = (transactionToRemove) => {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction !== transactionToRemove
      )
    );
  };

  // const filterTransactions = () => {

  // }

  return (
    <div className="app">
      <Header NuKenzie={NuKenzie} />
      <main className="mainContainer">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List
          listTransactions={listTransactions}
          handleTransactions={handleTransactions}
          setListTransactions={setListTransactions}
        />
      </main>
    </div>
  );
};

export default App;
