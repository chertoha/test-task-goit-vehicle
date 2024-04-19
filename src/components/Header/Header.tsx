import { ROUTES } from "config/router";
import { NavLink } from "react-router-dom";
import "./Header.styled.css";

const Header = () => {
  return (
    <header className="pt-8">
      <div className="container-default">
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink
                className="heading-2 nav-link"
                to={ROUTES.HOME}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="heading-2 nav-link"
                to={ROUTES.CATALOG}
              >
                Catalog
              </NavLink>
            </li>

            <li>
              <NavLink
                className="heading-2 nav-link"
                to={ROUTES.FAVORITES}
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
