import "./Footer.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import githubIcon from "../../assets/icons/github.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">
        <NavLink to="/" className="footer__logo">
          <img
            className="footer__logo-icon"
            src={lotusLogo}
            alt="vector icon of a lotus flower"
          />
          Yoga AI
        </NavLink>

        <p className="footer__text">Made With ❤️ & 💧 by Laura Nguyen</p>
        <a
          className="footer__github-link"
          href="https://github.com/laura-nguyen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__github-icon"
            src={githubIcon}
            alt="GitHub icon"
          />
        </a>
        <p className="footer__text">© Copyright {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
