/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ children, type }) => {
  return (
    <>
      {type === "View Now" && (
        <NavLink to="/catalog" className={css.link}>
          {children}
        </NavLink>
      )}
      {type === "Search" && (
        <button type="button" className={css.btn}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
