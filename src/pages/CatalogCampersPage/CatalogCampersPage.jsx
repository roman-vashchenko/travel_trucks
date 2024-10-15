import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogCampersPage.module.css";

const CatalogCampersPage = () => {
  return (
    <div>
      <h1 className={css.visuallyHidden}>Catalog travel trucks</h1>
      <section className={css.section}>
        <div>
          <Location />
          <Filters />
        </div>
        <CampersList />
      </section>
    </div>
  );
};

export default CatalogCampersPage;
