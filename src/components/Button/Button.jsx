/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import css from "./Button.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

const Button = ({ children, id, handleLoadMore, setPage }) => {
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
            setPage(1);
            dispatch(fetchCampers(1));
          }}
        >
          {children}
        </button>
      )}
      {children === "Show more" && (
        <NavLink to={`/catalog/${id}`} className={css.link} target="_blank">
          {children}
        </NavLink>
      )}
      {children === "Send" && (
        <button type="submit" className={css.btnForm}>
          {children}
        </button>
      )}
      {children === "Load more" && (
        <button
          type="button"
          className={css.btnLoadMore}
          onClick={handleLoadMore}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
