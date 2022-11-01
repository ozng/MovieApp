import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import CategoryDetail from "../pages/CategoryDetail/CategoryDetail";
import Detail from "../pages/Detail/Detail";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-detail/:category" element={<CategoryDetail />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default MainRouter;
