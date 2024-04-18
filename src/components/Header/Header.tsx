import { ROUTES } from "config/router";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="pt-8">
      <div className="container-default">
        <nav>
          <ul className="flex gap-x-10 border-b border-black/20  max-md:gap-x-3">
            <li>
              <NavLink
                className="block relative heading-2 pb-6 after:hidden after:absolute after:left-0 after:bottom-[-3px] after:h-[3px] md:after:h-[5px] after:w-full after:bg-accent  [&.active]:after:block"
                to={ROUTES.HOME}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                className="block relative heading-2 pb-6 after:hidden after:absolute after:left-0 after:bottom-[-3px] after:h-[3px] md:after:h-[5px] after:w-full after:bg-accent  [&.active]:after:block"
                to={ROUTES.CATALOG}
              >
                Catalog
              </NavLink>
            </li>

            <li>
              <NavLink
                className="block relative heading-2 pb-6 after:hidden after:absolute after:left-0 after:bottom-[-3px]  after:h-[3px] md:after:h-[5px] after:w-full after:bg-accent  [&.active]:after:block"
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
