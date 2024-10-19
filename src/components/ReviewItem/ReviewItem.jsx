/* eslint-disable react/prop-types */

const ReviewItem = ({ review }) => {
  return (
    <>
      <div></div>
      <p>{review.reviewer_name}</p>
      <p>{review.comment}</p>
    </>
  );
};

export default ReviewItem;
