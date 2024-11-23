import css from "./CharacteristicCamperItem.module.css";

/* eslint-disable react/prop-types */
const CharacteristicCamperItem = ({ element }) => {
  return (
    <>
      <svg width={16} height={16}>
        <use href={element.icon}></use>
      </svg>
      <span className={css.label}>
        {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
      </span>
    </>
  );
};

export default CharacteristicCamperItem;
