import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";

const Location = () => {
  return (
    <div className={css.content}>
      <p className={css.text}>Location</p>
      <p className={css.location}>
        <CiMap size={20} />
        <span>Kyiv, Ukraine</span>
      </p>
    </div>
  );
};

export default Location;
