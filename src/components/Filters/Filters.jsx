/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import FilterListByEquipment from "../FilterListByEquipment/FilterListByEquipment";
import FilterListByType from "../FilterListByType/FilterListByType";
import css from "./Filters.module.css";

/* eslint-disable react/prop-types */
const Filters = ({ setPage }) => {
  return (
    <div>
      <p className={css.text}>Filters</p>
      <p className={css.typeFilter}>Vehicle equipment</p>
      <div className={css.line}></div>
      <FilterListByEquipment />
      <p className={css.typeFilter}>Vehicle type</p>
      <div className={css.line}></div>
      <FilterListByType />
      <Button setPage={setPage}>Search</Button>
    </div>
  );
};

export default Filters;
