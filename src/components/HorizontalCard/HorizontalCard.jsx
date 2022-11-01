import "./horizontalCard.css";
import { Rate } from "antd";

const imageURL = process.env.REACT_APP_IMG_URL;

function HorizontalCard({ movie }) {
  return (
    <div className="horizontal-card-container" key={movie.id}>
      <div>
        <img
          src={`${imageURL}/w154/${movie.poster_path}`}
          alt="movie poster"
          className="horizontal-card-image"
        />
        <h3 className="horizontal-card-title">{movie.title}</h3>
      </div>
      <div className="horizontal-card-rate-container">
        {movie.vote_average > 0 ? (
          <>
            <Rate
              tooltips={movie.vote_average / 2}
              className="horizontal-card-rate"
              allowHalf
              disabled
              defaultValue={movie.vote_average / 2}
            />
            <span className="horizontal-card-rate-count">
              {movie.vote_average / 2}
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
