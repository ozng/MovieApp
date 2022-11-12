import "./categoryDetail.css";

import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import NoCategory from "../../components/NoCategory/NoCategory";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { scrollToTop } from "../../helpers/UIHandlers";
import { setCategoryTitleHandler } from "../../helpers/Methods";

function CategoryDetail() {
  const params = useParams();

  const selectedCategory = params.category;

  const selectedCategoryData = useSelector(
    (state) => state.movie[selectedCategory]
  );

  const [selectedTitle, setSelectedTitle] = useState("MYMDB");
  const [isCategorySelected, setIsCategorySelected] = useState(true);

  useEffect(() => {
    const { categoryTitle, categoryIsSet } =
      setCategoryTitleHandler(selectedCategory);
    setSelectedTitle(categoryTitle);
    setIsCategorySelected(categoryIsSet);
    scrollToTop();
  }, [selectedCategory]);

  return (
    <>
      <Header />
      <div className="p-container m-x-5">
        {isCategorySelected ? (
          <>
            <div>
              <h1 className="category-detail-title">{selectedTitle} Movies</h1>
            </div>
            <div>
              {selectedCategoryData &&
                selectedCategoryData.map((movie, index) => (
                  <div key={index}>
                    <VerticalCard movie={movie} />
                  </div>
                ))}
            </div>
          </>
        ) : (
          <NoCategory />
        )}
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default CategoryDetail;
