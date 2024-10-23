/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import css from "./Button.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

const Button = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <>
      {children === "View Now" && (
        <NavLink to="/catalog" className={css.link}>
          {children}
        </NavLink>
      )}
      {children === "Search" && (
        <button
          type="button"
          className={css.btn}
          onClick={() => {
            dispatch(fetchCampers());
          }}
        >
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
