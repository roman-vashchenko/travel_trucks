/* eslint-disable react/prop-types */
import css from "./ReviewItem.module.css";

const ReviewItem = ({ review }) => {
  const totalStars = 5;
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.icon}>
          <span>{review.reviewer_name.charAt(0)}</span>
        </div>
        <div>
          <p className={css.name}>{review.reviewer_name}</p>
          <div>
            {[...Array(totalStars)].map((_, index) => (
              <span key={index}>
                {index < review.reviewer_rating ? (
                  <svg width={16} height={16}>
                    <use href="/icons.svg#star"></use>
                  </svg>
                ) : (
                  <svg width={16} height={16}>
                    <use href="/icons.svg#star_transparent"></use>
                  </svg>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className={css.comment}>{review.comment}</p>
    </>
  );
};

export default ReviewItem;
