import "./Header.scss";
import lotusLogo from "./../../assets/icons/logo-lotus.png";
import { NavLink } from "react-router-dom";
import { refreshPage } from "./../../utils/helper.js";

const Header = () => {
  const handleNavLinkClick = () => {
    document.getElementById("sidebar-active").checked = false;
  };

  return (
    <header className="header" onClick={refreshPage}>
      <NavLink to="/" className="header__logo" onClick={refreshPage}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            viewBox="0 -960 960 960"
            width="32"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
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
