/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import css from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <>
      {children === "View Now" && (
        <NavLink to="/catalog" className={css.link}>
          {children}
        </NavLink>
      )}
      {children === "Search" && (
        <button type="button" className={css.btn}>
          {children}
        </button>
      )}
      {children === "Show more" && (
        <NavLink to="/catalog/1" className={css.link}>
          {children}
        </NavLink>
      )}
      {children === "Send" && (
        <button type="submit" className={css.btnForm}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
