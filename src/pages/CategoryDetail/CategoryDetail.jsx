import "./categoryDetail.css";
import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer/Footer";
import VerticalCard from "../../components/Cards/VerticalCard/VerticalCard";
import NoCategory from "../../components/NoCategory/NoCategory";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { scrollToTop } from "../../helpers/UIHandlers";

function CategoryDetail() {
  const params = useParams();

  const selectedCategory = params.category;

  const selectedCategoryData = useSelector(
    (state) => state.movie[selectedCategory]
  );

  const [selectedTitle, setSelectedTitle] = useState("MYMDB");
  const [isCategorySelected, setIsCategorySelected] = useState(true);

  useEffect(() => {
    if (selectedCategory === "upcoming") {
      setSelectedTitle("Upcoming");
      setIsCategorySelected(true);
    } else if (selectedCategory === "topRated") {
      setSelectedTitle("Top Rated");
      setIsCategorySelected(true);
    } else if (selectedCategory === "nowPlaying") {
      setSelectedTitle("Now Playing");
      setIsCategorySelected(true);
    } else if (selectedCategory === "searchedMovies") {
      setSelectedTitle("Searched");
      setIsCategorySelected(true);
    } else if (selectedCategory === "similarMovies") {
      setSelectedTitle("Similar");
      setIsCategorySelected(true);
    } else {
      setIsCategorySelected(false);
    }
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
