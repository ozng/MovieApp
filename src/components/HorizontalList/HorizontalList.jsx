import HorizontalCard from "../Cards/HorizontalCard/HorizontalCard";
import DetailTitle from "../DetailComponents/DetailTitle/DetailTitle";
import "./horizontalList.css";
import { LoadingOutlined } from "@ant-design/icons";

function HorizontalList({ movieList, title, onClickTitle, isLoading }) {
  return (
    <div className="horizontal-list-container">
      <DetailTitle title={title} onClickTitle={onClickTitle} clickable />
      <div className="horizontal-list-card-container">
        {isLoading ? (
          <div className="horizontal-list-card-loading-container">
            <LoadingOutlined spin />
          </div>
        ) : (
          movieList?.length > 0 &&
          movieList.map((movie, index) => (
            <HorizontalCard key={index} movie={movie} />
          ))
        )}
        {}
      </div>
    </div>
  );
}

export default HorizontalList;
