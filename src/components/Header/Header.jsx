import "./Header.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import exitIcon from "./../../assets/icons/exit.svg";
import hamburgerMenuIcon from "./../../assets/icons/hamburger-menu.svg";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";

const Header = () => {
  const handleNavLinkClick = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  return (
    <header className="header">
      <NavLink to="/" className="header__logo">
        <img
          className="header__logo-icon"
          src={lotusLogo}
          alt="vector icon of a lotus flower"
        />
        <span>
          yog<span className="logo__title--coral">ai</span>nstruct
        </span>
      </NavLink>
      <nav>
        <input type="checkbox" id="sidebar-active" />
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <img src={hamburgerMenuIcon} alt="hamburger menu icon" />
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <img src={exitIcon} alt="exit icon" />
          </label>

          <div className="nav__links" onClick={refreshPage}>
            <NavLink
              to="/poses"
              className="nav__link--non-button"
              onClick={() => {
                handleNavLinkClick;
                refreshPage;
              }}
            >
              Learn Yoga
            </NavLink>
            <div className="nav__link-wrapper--cta">
              <NavLink
                to="/instructions"
                onClick={() => {
                  handleNavLinkClick;
                  refreshPage;
                }}
              >
                <button className="nav__link--cta">Start Session</button>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
