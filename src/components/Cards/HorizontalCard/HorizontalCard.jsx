import "./horizontalCard.css";
import { Rate, Image } from "antd";
import { useNavigate } from "react-router-dom";
import { imageURL } from "../../../constants/Api";

function HorizontalCard({ movie }) {
  const navigate = useNavigate();

  const navigateToDetailHandler = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div
      onClick={navigateToDetailHandler}
      className="horizontal-card-container"
    >
      <div>
        <Image
          src={`${imageURL}/original/${movie?.poster_path}`}
          className="horizontal-card-image"
          preview={false}
        />
        <h3 className="horizontal-card-title">{movie?.title}</h3>
      </div>
      <div className="horizontal-card-rate-container">
        {movie?.vote_average > 0 ? (
          <>
            <Rate
              tooltips={1}
              className="horizontal-card-rate"
              disabled
              defaultValue={1}
              value={1}
              count={1}
            />
            <span className="horizontal-card-rate-count">
              {movie?.vote_average.toFixed(1)}
            </span>
          </>
        ) : (
          <p className="horizontal-not-rated">*Not voted yet.</p>
        )}
      </div>
    </div>
  );
}

export default HorizontalCard;
