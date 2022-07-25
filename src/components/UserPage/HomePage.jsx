import "./HomePage.css";

const HomePage = ({ userPage, NuKenzieImageGroup, NuKenzieWhite }) => {
  return (
    <div className="homePageBox">
      <section className="homePageInfoBox">
        <img src={NuKenzieWhite} alt="Nu Kenzie" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button onClick={userPage}>Iniciar</button>
      </section>
      <section className="nuKenzieImageGroupBox">
        <img src={NuKenzieImageGroup} alt="Nu Kenzie" />
      </section>
    </div>
  );
};

export default HomePage;
