import "./Footer.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import githubIcon from "../../assets/icons/github.png";
import emailIcon from "../../assets/icons/email.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__content--left">
            <NavLink to="/" className="footer__logo">
              <img
                className="footer__logo-icon"
                src={lotusLogo}
                alt="vector icon of a lotus flower"
              />
              <span className="footer__logo-title">
                yog<span className="logo__title--coral">ai</span>nstruct
              </span>
            </NavLink>
            <p>© Copyright {currentYear}</p>
          </div>
          <div className="footer__content--right">
            <div className="footer__socials">
              <a
                className="footer__github-link"
                href="https://github.com/laura-nguyen"
                target="_blank"
              >
                <img
                  className="footer__github-icon"
                  src={githubIcon}
                  alt="GitHub icon"
                />
              </a>
              <a
                className="footer__github-link"
                href="mailto:nguy9640@mylaurier.ca"
                target="_blank"
              >
                <img
                  className="footer__github-icon"
                  src={emailIcon}
                  alt="GitHub icon"
                />
              </a>
              <a
                className="footer__github-link"
                href="https://linkedin.com/in/laura-nguyen"
                target="_blank"
              >
                <img
                  className="footer__github-icon"
                  src={linkedinIcon}
                  alt="GitHub icon"
                />
              </a>
            </div>
            <p>Made With ❤️ & 💧 by Laura Nguyen</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
