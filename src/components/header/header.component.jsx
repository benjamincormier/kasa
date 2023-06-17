import logo from "../../assets/logo-kasa.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <img src={logo} alt="Kasa" className="header__logo" />
    <div className="header__links">
      <p className="header__link">Accueil</p>
      <p className="header__link">A propos</p>
    </div>
  </div>
);

export default Header;

/* CONVERTIR LES P EN LINK UNE FOIS REACT ROUTER AJOUTE */
