import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./ReviewsList.module.css";

const ReviewsList = () => {
  const camper = useSelector(selectCamper);

  return (
    <div className={css.content}>
      <ul className={css.list}>
        {camper.reviews.map((review, index) => (
          <li key={index}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
