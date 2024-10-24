import { useSelector } from "react-redux";
import Button from "../Button/Button";
import FilterListByEquipment from "../FilterListByEquipment/FilterListByEquipment";
import FilterListByType from "../FilterListByType/FilterListByType";
import css from "./Filters.module.css";
import { selectFiltersByPropertys } from "../../redux/filters/selectors";

const Filters = () => {
  const filter = useSelector(selectFiltersByPropertys);
  console.log(filter);
  return (
    <div>
      <p className={css.text}>Filters</p>
      <p className={css.typeFilter}>Vehicle equipment</p>
      <div className={css.line}></div>
      <FilterListByEquipment />
      <p className={css.typeFilter}>Vehicle type</p>
      <div className={css.line}></div>
      <FilterListByType />
      <Button type="Search">Search</Button>
    </div>
  );
};

export default Filters;
