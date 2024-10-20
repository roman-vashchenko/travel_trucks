import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import CatalogCampersPage from "./pages/CatalogCampersPage/CatalogCampersPage";
import CapmerDetailsPage from "./pages/CapmerDetailsPage/CapmerDetailsPage";
import Layout from "./components/Layout/Layout";
import CamperFeatures from "./components/CamperFeatures/CamperFeatures";
import CamperReviews from "./components/CamperReviews/CamperReviews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogCampersPage />} />
          <Route path="/catalog/:id" element={<CapmerDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
