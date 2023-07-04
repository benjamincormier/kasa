import { Link, NavLink /* useLocation */ } from "react-router-dom";

import logo from "../../assets/logo-kasa.png";

import "./header.styles.scss";

const Header = () => {
  /*   const location = useLocation();
  console.log(location); */
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="header__logo" />
      </Link>
      <nav className="header__links">
        <NavLink
          to="/"
          exact
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive, _ }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

/* CONVERTIR LES P EN LINK UNE FOIS REACT ROUTER AJOUTE */
