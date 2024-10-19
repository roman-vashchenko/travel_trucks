import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./ReviewsList.module.css";

const reviews = [
  {
    reviewer_name: "Alice",
    reviewer_rating: 5,
    comment:
      "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!",
  },
  {
    reviewer_name: "Bob",
    reviewer_rating: 4,
    comment:
      "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience. Only minor issues with the bathroom setup, but overall a wonderful experience.",
  },
];
const ReviewsList = () => {
  return (
    <div className={css.content}>
      <ul className={css.list}>
        {reviews.map((review, index) => (
          <li key={index}>
            <ReviewItem review={review} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewsList;
