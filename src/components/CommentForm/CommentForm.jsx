import { Field, Formik, Form } from "formik";
import css from "./CommentForm.module.css";
import Button from "../Button/Button";
const CommentForm = () => {
  return (
    <div className={css.wrapperForm}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik>
        <Form>
          <div className={css.wrapperFields}>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <Field
              className={css.field}
              type="text"
              name="email"
              placeholder="Email*"
            />
            <Field
              className={css.field}
              type="date"
              name="date"
              placeholder="Booking date*"
            />
            <Field
              className={css.fieldComment}
              component="textarea"
              name="comment"
              placeholder="Comment"
            />
          </div>
          <Button>Send</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
