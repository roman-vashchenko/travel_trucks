/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import css from "./Camper.module.css";

import Button from "../Button/Button";
import { CiMap } from "react-icons/ci";
import CharacteristicCamperItem from "../CharacteristicCamperItem/CharacteristicCamperItem";

const Camper = ({ camper }) => {
  const {
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
  } = camper;
  const characteristic = [
    transmission && { name: `${transmission}`, icon: "/icons.svg#automatic" },
    engine && { name: `${engine}`, icon: "" },
    AC && { name: "AC", icon: "/icons.svg#ac" },
    bathroom && { name: "Bathroom", icon: "/icons.svg#bathroom" },
    kitchen && { name: "Kitchen", icon: "/icons.svg#kitchen" },
    TV && { name: "TV", icon: "/icons.svg#tv" },
    radio && { name: "Radio", icon: "" },
    refrigerator && { name: "Refrigerator", icon: "" },
    microwave && { name: "Microwave", icon: "" },
    gas && { name: "Gas", icon: "" },
    water && { name: "Water", icon: "" },
  ].filter(Boolean);
  return (
    <>
      <div>
        <img
          className={css.img}
          src={camper.gallery[0].original}
          alt={camper.name}
          width={430}
        />
      </div>
      <div className={css.content}>
        <div className={css.wrapTitle}>
          <h2 className={css.name}>{camper.name}</h2>
          <p className={css.price}>
            €{camper.price}.00 <CiHeart className={css.icon} size={26} />
          </p>
        </div>
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
        <p className={css.description}>{camper.description}</p>
        <ul className={css.list}>
          {characteristic.map((element, index) => (
            <li key={index} className={css.item}>
              <CharacteristicCamperItem element={element} />
            </li>
          ))}
        </ul>
        <Button>Show more</Button>
      </div>
    </>
  );
};

export default Camper;
