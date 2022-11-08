import HorizontalCard from "../HorizontalCard/HorizontalCard";
import "./horizontalList.css";
import { LoadingOutlined } from "@ant-design/icons";

function HorizontalList({ movieList, title, onClickTitle, isLoading }) {
  return (
    <div className="horizontal-list-container">
      <h2 className="horizontal-list-title" onClick={onClickTitle}>
        {title}
      </h2>
      <div className="horizontal-list-card-container">
        {isLoading ? (
          <div className="horizontal-list-card-loading-container">
            <LoadingOutlined spin />
          </div>
        ) : (
          movieList?.length > 0 &&
          movieList.map((movie) => <HorizontalCard movie={movie} />)
        )}
        {}
      </div>
    </div>
  );
}

export default HorizontalList;
