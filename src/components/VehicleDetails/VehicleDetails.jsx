/* eslint-disable react/prop-types */
import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ details }) => {
  return (
    <>
      <p className={css.text}>Vehicle details</p>
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
          <span>{details.consumption}</span>
        </li>
      </ul>
    </>
  );
};

export default VehicleDetails;
