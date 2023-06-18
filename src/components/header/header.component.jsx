import { Link } from "react-router-dom";

import logo from "../../assets/logo-kasa.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="header__link">
      <img src={logo} alt="Kasa" className="header__logo" />
    </Link>
    <nav className="header__links">
      <Link to="/" className="header__link">
        Accueil
      </Link>
      <Link to="/about" className="header__link">
        A propos
      </Link>
    </nav>
  </div>
);

export default Header;

/* CONVERTIR LES P EN LINK UNE FOIS REACT ROUTER AJOUTE */
