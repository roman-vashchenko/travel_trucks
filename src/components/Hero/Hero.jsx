import Button from "../Button/Button";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.content}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>
        You can find everything you want in our catalog
      </p>
      <Button>View Now</Button>
    </div>
  );
};

export default Hero;
