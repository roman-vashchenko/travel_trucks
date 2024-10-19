import css from "./CamperReviews.module.css";

import ReviewsList from "../ReviewsList/ReviewsList";
import CommentForm from "../CommentForm/CommentForm";

const CamperReviews = () => {
  return (
    <section className={css.section}>
      <ReviewsList />
      <CommentForm />
    </section>
  );
};

export default CamperReviews;
