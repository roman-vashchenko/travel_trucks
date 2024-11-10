/* eslint-disable react/prop-types */
import css from "./Camper.module.css";

import Button from "../Button/Button";
import { CiMap } from "react-icons/ci";
import CharacteristicCamperList from "../CharacteristicCamperList/CharacteristicCamperList";
import { useDispatch, useSelector } from "react-redux";
import { addToSelectedList } from "../../redux/campers/slice";
import { selecteItemsSelected } from "../../redux/campers/selectors";

const Camper = ({ camper }) => {
  const dispatch = useDispatch();
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  const handleClick = () => {
    dispatch(addToSelectedList(camper.id));
  };

  const selectedItemsList = useSelector(selecteItemsSelected);

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
            €{camper.price}.00{" "}
            <button
              type="button"
              className={css.btnFavorite}
              onClick={handleClick}
            >
              <svg
                width={26}
                height={26}
                style={{
                  color: selectedItemsList.includes(camper.id)
                    ? "rgba(228, 72, 72, 1)"
                    : "rgba(16, 24, 40, 1)",
                }}
              >
                <use href="/icons.svg#heart"></use>
              </svg>
            </button>
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
          {truncateText(camper.description, 70)}
        </p>
        <CharacteristicCamperList camper={camper} />
        <Button id={camper.id}>Show more</Button>
      </div>
    </>
  );
};

export default Camper;
