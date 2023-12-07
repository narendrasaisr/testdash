import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PerformanceTracker = React.lazy(() => import("pages/PerformanceTracker"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const InventoryTrendAnalysis = React.lazy(
  () => import("pages/InventoryTrendAnalysis"),
);
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const FreeCredits = React.lazy(() => import("pages/FreeCredits"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const AdhocReporting = React.lazy(() => import("pages/AdhocReporting"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/adhocreporting" element={<AdhocReporting />} />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/freecredits" element={<FreeCredits />} />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/performancetracker" element={<PerformanceTracker />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
