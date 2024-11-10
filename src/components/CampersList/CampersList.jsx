import { useSelector } from "react-redux";
import Camper from "../Camper/Camper";
import css from "./CampersList.module.css";
import {
  selectCampers,
  selecteIsLoading,
  selectTotalCampers,
} from "../../redux/campers/selectors";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const CampersList = ({ handleLoadMore }) => {
  const campers = useSelector(selectCampers);
  const total = useSelector(selectTotalCampers);
  const isLoading = useSelector(selecteIsLoading);

  return (
    <div className={css.content}>
      <ul className={css.list}>
        {campers.length > 0 &&
          campers.map((camper) => (
            <li key={camper.id} className={css.item}>
              <Camper camper={camper} />
            </li>
          ))}
      </ul>
      {campers.length > 0 && total !== campers.length && (
        <Button handleLoadMore={handleLoadMore}>Load more</Button>
      )}
      {!isLoading && campers.length === 0 && (
        <p style={{ fontSize: "30px" }}>Nothing was found for your request</p>
      )}
    </div>
  );
};

export default CampersList;
