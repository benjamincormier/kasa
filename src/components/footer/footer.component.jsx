import logo from "../../assets/logo-kasa-footer.png";

import "./footer.styles.scss";

const Footer = () => (
  <footer className="footer">
    <img src={logo} alt="Kasa" className="footer__logo" />
    <h3>© 2020 Kasa. All rights reserved</h3>
  </footer>
);

export default Footer;
