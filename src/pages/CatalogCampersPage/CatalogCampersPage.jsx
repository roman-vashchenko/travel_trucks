import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogCampersPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";

const CatalogCampersPage = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  console.log(page);
  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [page, dispatch]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <div>
      <h1 className={css.visuallyHidden}>Catalog travel trucks</h1>
      <section className={css.section}>
        <div className={css.wrap}>
          <Location />
          <Filters page={page} />
        </div>
        <CampersList handleLoadMore={handleLoadMore} />
      </section>
    </div>
  );
};

export default CatalogCampersPage;
