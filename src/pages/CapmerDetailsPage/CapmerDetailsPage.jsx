import { CiMap } from "react-icons/ci";
import css from "./CapmerDetailsPage.module.css";
import { NavLink, Outlet, useParams } from "react-router-dom";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper, selecteIsLoading } from "../../redux/campers/selectors";
import { fetchCamperById } from "../../redux/campers/operations";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const CapmerDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const isLoading = useSelector(selecteIsLoading);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <section className={css.section}>
      <Toaster position="top-right" reverseOrder={true} />
      {camper && (
        <>
          <h1 className={css.reviewer_name}>{camper.name}</h1>
          <div className={css.wrap}>
            <p className={css.rating}>
              <svg width={16} height={16}>
                <use href="/icons.svg#star"></use>
              </svg>
              <span>
                {camper.rating} ({camper.reviews.length} Reviews)
              </span>
            </p>
            <p className={css.location}>
              <CiMap size={16} />
              {camper.location}
            </p>
          </div>
          <p className={css.price}>€{camper.price}.00</p>
          <ul className={css.imagesList}>
            {camper.gallery.map((img, index) => (
              <li key={index} className={css.imgItem}>
                <img
                  src={img.original}
                  alt={camper.name}
                  className={css.img}
                  width={279}
                />
              </li>
            ))}
          </ul>
          <p className={css.description}>{camper.description}</p>
          <div className={css.additionalInformation}>
            <NavLink className={buildLinkClass} to="features">
              Features
            </NavLink>
            <NavLink className={buildLinkClass} to="reviews">
              Reviews
            </NavLink>
          </div>
          <Outlet />
        </>
      )}
      {!isLoading && camper === null && (
        <p style={{ fontSize: "30px" }}>Truck not found</p>
      )}
    </section>
  );
};

export default CapmerDetailsPage;
