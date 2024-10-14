import Button from "../Button/Button";
import css from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={css.content}>
      <p className={css.text}>Filters</p>
      <p className={css.typeFilter}>Vehicle equipment</p>
      <div className={css.line}></div>
      <ul>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#ac"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#automatic"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#kitchen"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#tv"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#bathroom"></use>
          </svg>
        </li>
      </ul>
      <p className={css.typeFilter}>Vehicle type</p>
      <div className={css.line}></div>
      <ul>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#van"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#fully_integrated"></use>
          </svg>
        </li>
        <li>
          <svg width={32} height={32}>
            <use href="../../../public/icons.svg#alcove"></use>
          </svg>
        </li>
      </ul>

      <Button type="Search">Search</Button>
    </div>
  );
};

export default Filters;
