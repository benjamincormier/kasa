import { Link } from "react-router-dom";

import error404 from "../../assets/404.svg";

import "./error.styles.scss";

const Error = () => (
  <div className="error">
    <img src={error404} alt="404" />
    <h2>Oups! La page que vous demandez n'existe pas.</h2>
    <Link to="/" className="error__link">
      Retourner sur la page d'accueil
    </Link>
  </div>
);

export default Error;
