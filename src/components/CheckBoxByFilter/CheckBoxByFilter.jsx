/* eslint-disable react/prop-types */
import { useState } from "react";
import css from "./CheckBoxByFilter.module.css";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { addFilter } from "../../redux/filters/slice";

const CheckBoxByFilter = ({ label, icon, id }) => {
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const filterMap = {
    AC: "AC",
    automatic: "transmission=automatic",
    kitchen: "kitchen",
    TV: "TV",
    bathroom: "bathroom",
    alcover: "alcover",
  };
  const handleCheck = () => {
    const filterQuery = filterMap[label];
    setIsChecked(!isChecked);
    dispatch(addFilter(filterQuery));
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
