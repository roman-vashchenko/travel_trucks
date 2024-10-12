import Hero from "../../components/Hero/Hero";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div>
      <section className={css.section}>
        <Hero />
      </section>
    </div>
  );
};

export default HomePage;
