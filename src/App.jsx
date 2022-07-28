import { useState } from "react";
import NuKenzie from "./assets/img/NuKenzie.svg";
import NuKenzieWhite from "../src/assets/img/NuKenzieWhite.svg";
import NoCard from "../src/assets/img/NoCard.svg";
import NuKenzieImageGroup from "../src/assets/img/NuKenzieImageGroup.svg";

import HomePage from "./components/UserPage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";

import "./base.css";
import "./reset.css";
import "./App.css";

const App = () => {
  const [listTransactions, setListTransactions] = useState([]);

  const [isAccessGranted, setIsAccessGranted] = useState(false);

  const userPage = () => setIsAccessGranted(true);

  const homePage = () => setIsAccessGranted(false);

  const handleTransactions = (transactionToRemove) => {
    setListTransactions(
      listTransactions.filter(
        (transaction) => transaction !== transactionToRemove
      )
    );
  };
  
  return isAccessGranted ? (
    <div className="userPage">
      <Header NuKenzie={NuKenzie} homePage={homePage} />
      <main className="mainContainer">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        <List
          listTransactions={listTransactions}
          handleTransactions={handleTransactions}
          setListTransactions={setListTransactions}
          NoCard={NoCard}
        />
      </main>
    </div>
  ) : (
    <div className="homePage">
      <HomePage
        userPage={userPage}
        NuKenzieImageGroup={NuKenzieImageGroup}
        NuKenzieWhite={NuKenzieWhite}
      />
    </div>
  );
};

export default App;
