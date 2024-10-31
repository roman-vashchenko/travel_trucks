import { useSelector } from "react-redux";
import CharacteristicCamperList from "../CharacteristicCamperList/CharacteristicCamperList";
import CommentForm from "../CommentForm/CommentForm";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
const CamperFeatures = () => {
  const camper = useSelector(selectCamper);

  return (
    <section className={css.section}>
      <div className={css.content}>
        <CharacteristicCamperList camper={camper} />
        <VehicleDetailsList camper={camper} />
      </div>
      <CommentForm />
    </section>
  );
};

export default CamperFeatures;
