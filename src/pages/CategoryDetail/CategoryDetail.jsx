import "./categoryDetail.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalCard from "../../components/VerticalCard/VerticalCard";
import { useEffect, useState } from "react";
import NoCategory from "../../components/NoCategory/NoCategory";
import Footer from "../../components/Footer/Footer";

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
  }, [selectedCategory]);

  return (
    <>
      <Header />
      {isCategorySelected ? (
        <>
          <div className="category-detail-title-container">
            <h1 className="category-detail-title">{selectedTitle} Movies</h1>
          </div>
          <div className="category-detail-margin">
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
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default CategoryDetail;
