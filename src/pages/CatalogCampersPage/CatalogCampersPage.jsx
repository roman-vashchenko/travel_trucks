import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogCampersPage.module.css";

const CatalogCampersPage = () => {
  return (
    <div>
      <section className={css.section}>
        <Location />
        <Filters />
      </section>
    </div>
  );
};

export default CatalogCampersPage;
