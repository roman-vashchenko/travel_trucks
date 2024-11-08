import { useEffect, useState } from "react";
import CampersList from "../../components/CampersList/CampersList";
import Filters from "../../components/Filters/Filters";
import Location from "../../components/Location/Location";
import css from "./CatalogCampersPage.module.css";
import { useDispatch } from "react-redux";
import { fetchCampers } from "../../redux/campers/operations";
import { resetFilters } from "../../redux/campers/slice";
import { Toaster } from "react-hot-toast";

const CatalogCampersPage = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(resetFilters());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCampers(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <h1 className={css.visuallyHidden}>Catalog travel trucks</h1>
      <section className={css.section}>
        <Toaster position="top-right" reverseOrder={true} />
        <div className={css.wrap}>
          <Location />
          <Filters setPage={setPage} />
        </div>
        <CampersList handleLoadMore={handleLoadMore} />
      </section>
    </div>
  );
};

export default CatalogCampersPage;
