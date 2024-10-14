import { useState } from "react";
import css from "./CheckBoxByFilter.module.css";
import clsx from "clsx";

/* eslint-disable react/prop-types */
const CheckBoxByFilter = ({ label, icon, id }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label
      htmlFor={id}
      className={clsx(css.checkBoxLabel, isChecked ? css.checked : "")}
    >
      <div className={css.wrapper}>
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          style={{ display: "none" }}
        />
        <svg width={32} height={32}>
          <use href={icon}></use>
        </svg>
        <span className={css.label}>{label}</span>
      </div>
    </label>
  );
};

export default CheckBoxByFilter;
