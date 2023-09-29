import { Routes, Route } from "react-router-dom";
import { Home, TestPage, TextExpanderPage } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/textexpander" element={<TextExpanderPage />} />
      </Routes>
    </div>
  );
};
