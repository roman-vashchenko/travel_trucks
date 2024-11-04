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
    engine && { name: `${engine}`, icon: "/icons.svg#petrol" },
    AC && { name: "AC", icon: "/icons.svg#ac" },
    bathroom && { name: "bathroom", icon: "/icons.svg#bathroom" },
    kitchen && { name: "kitchen", icon: "/icons.svg#kitchen" },
    TV && { name: "TV", icon: "/icons.svg#tv" },
    radio && { name: "radio", icon: "/icons.svg#radio" },
    refrigerator && { name: "refrigerator", icon: "/icons.svg#refrigerator" },
    microwave && { name: "microwave", icon: "/icons.svg#microwave" },
    gas && { name: "gas", icon: "/icons.svg#gas" },
    water && { name: "water", icon: "/icons.svg#water" },
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
