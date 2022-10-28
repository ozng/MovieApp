import HorizontalCard from "../HorizontalCard/HorizontalCard";
import "./horizontalList.css";

function HorizontalList({ movieList, title }) {
  return (
    <div className="horizontal-list-container">
      <h2 className="horizontal-list-title">{title}</h2>
      <div className="horizontal-list-card-container">
        {movieList.map((movie) => (
          <HorizontalCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HorizontalList;
