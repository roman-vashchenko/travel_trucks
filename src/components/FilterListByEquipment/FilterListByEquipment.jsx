import CheckBoxByFilter from "../CheckBoxByFilter/CheckBoxByFilter";
import css from "./FilterListByEquipment.module.css";

const FilterListByEquipment = () => {
  const labels = ["AC", "Automatic", "Kitchen", "TV", "Bathroom"];
  const iconsLinks = [
    "/icons.svg#ac",
    "/icons.svg#automatic",
    "/icons.svg#kitchen",
    "/icons.svg#tv",
    "/icons.svg#bathroom",
  ];
  return (
    <ul className={css.list}>
      {labels.map((label, index) => (
        <li key={index} className={css.item}>
          <CheckBoxByFilter id={index} icon={iconsLinks[index]} label={label} />
        </li>
      ))}
    </ul>
  );
};

export default FilterListByEquipment;
