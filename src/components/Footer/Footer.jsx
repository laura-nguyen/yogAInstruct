import "./Footer.scss";
import lotusLogo from "./../../assets/images/logo-lotus.png";
import githubIcon from "../../assets/images/github.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__content">
        <a className="footer__logo">
          <img
            className="footer__logo-icon"
            src={lotusLogo}
            alt="vector icon of a lotus flower"
          />
          Yoga AI
        </a>

        <p className="footer__text">
          © Copyright {currentYear} | Made With ❤️ & 💧 by Laura Nguyen
        </p>
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
      </div>
    </footer>
  );
};

export default Footer;
