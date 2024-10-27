/* eslint-disable react/prop-types */
import VehicleDetailItem from "../VehicleDetailItem/VehicleDetailItem";
import css from "./VehicleDetailsList.module.css";

const VehicleDetailsList = ({ camper }) => {
  const { form, length, width, height, tank, consumption } = camper;
  const details = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

  const detailsName = Object.keys(details);

  return (
    <>
      <p className={css.text}>Vehicle details</p>
      <div className={css.line}></div>
      <ul className={css.detailsList}>
        {detailsName.map((name, index) => (
          <li key={index} className={css.itemDetail}>
            <VehicleDetailItem name={name} value={details[name]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehicleDetailsList;
