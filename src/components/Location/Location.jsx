import { useDispatch, useSelector } from "react-redux";
import css from "./Location.module.css";
import { CiMap } from "react-icons/ci";
import { addLocation } from "../../redux/filters/slice";
import { selectFilterByLocation } from "../../redux/filters/selectors";

const Location = () => {
  const value = useSelector(selectFilterByLocation);

  const dispatch = useDispatch();
  return (
    <div className={css.content}>
      <p className={css.text}>Location</p>
      <div className={css.wrap}>
        <input
          className={css.location}
          type="text"
          value={value}
          placeholder="example Kiev"
          onChange={(e) => dispatch(addLocation(e.target.value))}
        />
        <CiMap className={css.icon} size={20} />
      </div>
    </div>
  );
};

export default Location;
