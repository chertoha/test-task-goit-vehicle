import { ROUTES } from "config/router";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-5">
      <div className="container-default outline outline-orange-400">
        <div className="flex">
          <NavLink
            className="nav"
            to={ROUTES.HOME}
          >
            Home
          </NavLink>
          <NavLink
            className="nav"
            to={ROUTES.CATALOG}
          >
            Catalog
          </NavLink>
          <NavLink
            className="nav"
            to={ROUTES.FAVORITES}
          >
            Favorites
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
