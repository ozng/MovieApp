import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import CategoryDetail from "../pages/CategoryDetail/CategoryDetail";
import Detail from "../pages/Detail/Detail";
import People from "../pages/People/People";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category-detail/:category" element={<CategoryDetail />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/person/:id" element={<People />} />
      </Routes>
    </>
  );
}

export default MainRouter;
