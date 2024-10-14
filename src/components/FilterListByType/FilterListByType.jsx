import CheckBoxByFilter from "../CheckBoxByFilter/CheckBoxByFilter";
import css from "./FilterListByType.module.css";

const FilterListByType = () => {
  const labels = ["Van", "Fully Integrated", "Alcove"];
  const iconsLinks = [
    "/icons.svg#van",
    "/icons.svg#fully_integrated",
    "/icons.svg#alcove",
  ];
  return (
    <ul className={css.list}>
      {labels.map((label, index) => (
        <li key={index} className={css.item}>
          <CheckBoxByFilter id={label} icon={iconsLinks[index]} label={label} />
        </li>
      ))}
    </ul>
  );
};

export default FilterListByType;
