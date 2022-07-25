import "./Header.css";

const Header = ({ NuKenzie, homePage }) => (
  <header className="nuKenzieHeader">
    <div className="nuKenzieHeaderContainer">
      <div className="logoBox">
        <img src={NuKenzie} alt="Nu Kenzie Logo" className="logo" />
      </div>
      <nav className="buttonBox">
        <button className="homePageButton" onClick={homePage}>
          Início
        </button>
      </nav>
    </div>
  </header>
);

export default Header;
