import { Routes, Route } from "react-router-dom";
import { Home, TestPage, TextExpanderPage } from "../pages";
import { CurrencyConverter, Geolocation } from "../challenges";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/textexpander" element={<TextExpanderPage />} />
        <Route path="/currency" element={<CurrencyConverter />} />
        <Route path="/geolocation" element={<Geolocation />} />
      </Routes>
    </div>
  );
};
