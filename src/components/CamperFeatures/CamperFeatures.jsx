import { useSelector } from "react-redux";
import CharacteristicCamperList from "../CharacteristicCamperList/CharacteristicCamperList";
import CommentForm from "../CommentForm/CommentForm";
import VehicleDetailsList from "../VehicleDetailsList/VehicleDetailsList";
import css from "./CamperFeatures.module.css";
import { selectCamper } from "../../redux/campers/selectors";
const CamperFeatures = () => {
  const camper = useSelector(selectCamper);
  // const camper = {
  //   form: "alcove",
  //   length: "7.3m",
  //   width: "2.65m",
  //   height: "3.65m",
  //   tank: "208l",
  //   consumption: "30l/100km",
  //   transmission: "automatic",
  //   engine: "diesel",
  //   AC: true,
  //   bathroom: true,
  //   kitchen: false,
  //   TV: true,
  //   radio: true,
  //   refrigerator: false,
  //   microwave: true,
  //   gas: false,
  //   water: true,
  // };
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
