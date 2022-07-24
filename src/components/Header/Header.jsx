import "./Header.css";

const Header = ({ NuKenzie }) => (
  <header className="nuKenzieHeader">
    <div className="nuKenzieHeaderContainer">
      <div className="logoBox">
        <img src={NuKenzie} alt="Nu Kenzie Logo" className="logo" />
      </div>
      <nav className="buttonBox">
        <button className="homePageButton">Início</button>
      </nav>
    </div>
  </header>
);

export default Header;
