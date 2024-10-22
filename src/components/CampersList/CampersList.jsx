import { useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";
import { selectCampers } from "../../redux/campers/selectors";

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CampersList;
