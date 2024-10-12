import { NavLink } from "react-router-dom";
import css from "./NavBar.module.css";
import clsx from "clsx";

const NavBar = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/catalog">
          Catalog
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
