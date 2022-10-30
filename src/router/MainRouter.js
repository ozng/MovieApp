import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CategoryDetail from "../pages/CategoryDetail/CategoryDetail";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-detail/:category" element={<CategoryDetail />} />
      </Routes>
    </>
  );
}

export default MainRouter;
