import { useEffect } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogCampersPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

const CatalogCampersPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.visuallyHidden}>Catalog travel trucks</h1>
      <section className={css.section}>
        <div className={css.wrap}>
          <Location />
          <Filters />
        </div>
        <CampersList />
      </section>
    </div>
  );
};

export default CatalogCampersPage;
