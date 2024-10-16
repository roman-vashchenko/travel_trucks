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
    <div className={css.content}>
      <ul className={css.listСharacteristics}>
        {characteristic.map((element, index) => (
          <li key={index} className={css.item}>
            <svg width={16} height={16}>
              <use href={element.icon}></use>
            </svg>
            <span>{element.name}</span>
          </li>
        ))}
      </ul>
      <p className={css.details}>Vehicle details</p>
      <div className={css.line}></div>
      <ul className={css.detailsList}>
        <li className={css.itemDetail}>
          <p>Form</p>
          <span>{details.form}</span>
        </li>
        <li className={css.itemDetail}>
          <p>Length</p>
          <span>{details.length}</span>
        </li>
        <li className={css.itemDetail}>
          <p>Width</p>
          <span>{details.width}</span>
        </li>
        <li className={css.itemDetail}>
          <p>Height</p>
          <span>{details.height}</span>
        </li>
        <li className={css.itemDetail}>
          <p>Tank</p>
          <span>{details.tank}</span>
        </li>
        <li className={css.itemDetail}>
          <p>Consumption</p>
          <span>{camper.consumption}</span>
        </li>
      </ul>
    </div>
  );
};

export default CamperFeatures;
