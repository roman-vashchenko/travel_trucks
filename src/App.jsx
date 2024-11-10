import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogCampersPage = lazy(() =>
  import("./pages/CatalogCampersPage/CatalogCampersPage")
);
const CapmerDetailsPage = lazy(() =>
  import("./pages/CapmerDetailsPage/CapmerDetailsPage")
);
const CamperFeatures = lazy(() =>
  import("./components/CamperFeatures/CamperFeatures")
);
const CamperReviews = lazy(() =>
  import("./components/CamperReviews/CamperReviews")
);

function App() {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/catalog" element={<CatalogCampersPage />} />
            <Route path="/catalog/:id" element={<CapmerDetailsPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
            </Route>
            <Route
              path="*"
              element={
                <div style={{ fontSize: "30px", paddingLeft: "64px" }}>
                  Such an address does not exist
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
