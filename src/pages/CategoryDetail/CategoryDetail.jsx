import "./categoryDetail.css";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import VerticalCard from "../../components/VerticalCard/VerticalCard";

function CategoryDetail() {
  const params = useParams();

  const selectedCategory = params.category;

  const selectedCategoryData = useSelector(
    (state) => state.movie[selectedCategory]
  );

  return (
    <>
      <Header />
      <div className="category-detail-margin">
        {selectedCategoryData.map((movie) => (
          <VerticalCard movie={movie} />
        ))}
      </div>
    </>
  );
}

export default CategoryDetail;
