import HorizontalCard from "../HorizontalCard/HorizontalCard";
import "./horizontalList.css";

function HorizontalList({ movieList, title, onClickTitle }) {
  return (
    <div className="horizontal-list-container">
      <h2 className="horizontal-list-title" onClick={onClickTitle}>
        {title}
      </h2>
      <div className="horizontal-list-card-container">
        {movieList.map((movie) => (
          <HorizontalCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default HorizontalList;
