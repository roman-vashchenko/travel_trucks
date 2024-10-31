import { useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";
import { selectCampers } from "../../redux/campers/selectors";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const CampersList = ({ handleLoadMore }) => {
  const campers = useSelector(selectCampers);
  console.log(campers);

  return (
    <div className={css.content}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <li key={camper.id} className={css.item}>
            <Camper camper={camper} />
          </li>
        ))}
      </ul>
      <Button handleLoadMore={handleLoadMore}>Load more</Button>
    </div>
  );
};

export default CampersList;
