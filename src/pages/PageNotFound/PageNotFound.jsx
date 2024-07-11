import "./PageNotFound.scss";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="error">
      <h1>Page Not Found 😔</h1>
      <NavLink to="/">
        <button>Go to Homepage</button>
      </NavLink>
    </main>
  );
};

export default PageNotFound;
