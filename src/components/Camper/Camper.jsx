/* eslint-disable react/prop-types */
import { CiHeart } from "react-icons/ci";
import css from "./Camper.module.css";

import Button from "../Button/Button";
import { CiMap } from "react-icons/ci";
import CharacteristicCamperList from "../CharacteristicCamperList/CharacteristicCamperList";

const Camper = ({ camper }) => {
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <>
      <div>
        <img
          className={css.img}
          src={camper.gallery[0].original}
          alt={camper.name}
          width={292}
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
        <p className={css.description}>
          {truncateText(camper.description, 50)}
        </p>
        <CharacteristicCamperList camper={camper} />
        <Button id={camper.id}>Show more</Button>
      </div>
    </>
  );
};

export default Camper;
