import { CiMap } from "react-icons/ci";
import css from "./CapmerDetailsPage.module.css";
import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

const CapmerDetailsPage = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  const camper = {
    id: "1",
    name: "Road Bear C 23-25",
    price: 10000,
    rating: 4.5,
    location: "Ukraine, Kyiv",
    description:
      "Embadventures, promising comfort, style, and the freedom to explore at your own pace.",
    form: "alcove",
    length: "7.3m",
    width: "2.65m",
    height: "3.65m",
    tank: "208l",
    consumption: "30l/100km",
    transmission: "automatic",
    engine: "diesel",
    AC: true,
    bathroom: true,
    kitchen: false,
    TV: true,
    radio: true,
    refrigerator: false,
    microwave: true,
    gas: false,
    water: true,
    gallery: [
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-1.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-2.webp",
      },
      {
        thumb: "https://ftp.goit.study/img/campers-test-task/1-3.webp",
        original: "https://ftp.goit.study/img/campers-test-task/1-3.webp",
      },
    ],
    reviews: [
      {
        reviewer_name: "Alice",
        reviewer_rating: 5,
        comment:
          "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!",
      },
      {
        reviewer_name: "Bob",
        reviewer_rating: 4,
        comment:
          "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience.",
      },
    ],
  };
  return (
    <section className={css.section}>
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
    </section>
  );
};

export default CapmerDetailsPage;
