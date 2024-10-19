import CharacteristicCamperItem from "../CharacteristicCamperItem/CharacteristicCamperItem";
import CommentForm from "../CommentForm/CommentForm";
import VehicleDetails from "../VehicleDetails/VehicleDetails";
import css from "./CamperFeatures.module.css";
const CamperFeatures = () => {
  const details = {
    form: "alcove",
    length: "7.3m",
    width: "2.65m",
    height: "3.65m",
    tank: "208l",
    consumption: "30l/100km",
  };

  const camper = {
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
  };
  const characteristic = [
    camper.transmission && {
      name: `${camper.transmission}`,
      icon: "/icons.svg#automatic",
    },
    camper.engine && { name: `${camper.engine}`, icon: "" },
    camper.AC && { name: "AC", icon: "/icons.svg#ac" },
    camper.bathroom && { name: "Bathroom", icon: "/icons.svg#bathroom" },
    camper.kitchen && { name: "Kitchen", icon: "/icons.svg#kitchen" },
    camper.TV && { name: "TV", icon: "/icons.svg#tv" },
    camper.radio && { name: "Radio", icon: "" },
    camper.refrigerator && { name: "Refrigerator", icon: "" },
    camper.microwave && { name: "Microwave", icon: "" },
    camper.gas && { name: "Gas", icon: "" },
    camper.water && { name: "Water", icon: "" },
  ].filter(Boolean);
  return (
    <section className={css.section}>
      <div className={css.content}>
        <ul className={css.listСharacteristics}>
          {characteristic.map((element, index) => (
            <li key={index} className={css.item}>
              <CharacteristicCamperItem element={element} />
            </li>
          ))}
        </ul>
        <VehicleDetails details={details} />
      </div>
      <CommentForm />
    </section>
  );
};

export default CamperFeatures;
