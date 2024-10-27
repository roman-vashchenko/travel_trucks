/* eslint-disable react/prop-types */
import CharacteristicCamperItem from "../CharacteristicCamperItem/CharacteristicCamperItem";
import css from "./CharacteristicCamperList.module.css";

function CharacteristicCamperList({ camper }) {
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
    bathroom && { name: "bathroom", icon: "/icons.svg#bathroom" },
    kitchen && { name: "kitchen", icon: "/icons.svg#kitchen" },
    TV && { name: "TV", icon: "/icons.svg#tv" },
    radio && { name: "radio", icon: "" },
    refrigerator && { name: "refrigerator", icon: "" },
    microwave && { name: "microwave", icon: "" },
    gas && { name: "gas", icon: "" },
    water && { name: "water", icon: "" },
  ].filter(Boolean);

  return (
    <ul className={css.list}>
      {characteristic.map((element, index) => (
        <li key={index} className={css.item}>
          <CharacteristicCamperItem element={element} />
        </li>
      ))}
    </ul>
  );
}

export default CharacteristicCamperList;
