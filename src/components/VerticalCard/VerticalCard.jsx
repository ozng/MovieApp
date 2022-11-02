import "./verticalCard.css";
import { Image, Rate } from "antd";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const imageURL = process.env.REACT_APP_IMG_URL;

function VerticalCard({ movie }) {
  const navigate = useNavigate();

  return (
    <div className="vertical-card-container">
      <div className="vertical-card-image-container">
        <Image
          width={200}
          src={`${imageURL}/w500/${movie.poster_path}`}
          className="vertical-card-image"
        />
      </div>
      <div
        className="vertical-card-details-container"
        onClick={() => navigate(`/movie/${movie.id}`)}
      >
        <div className="vertical-card-title-overview-container">
          <h2 className="vertical-card-title">{movie.title}</h2>
          <p className="vertical-card-overview">{movie.overview}</p>
        </div>
        <div className="vertical-card-vote-container">
          <div className="vertical-card-rate-container">
            {movie.vote_average > 0 ? (
              <>
                <Rate
                  className="vertical-card-rate"
                  disabled
                  defaultValue={movie.vote_average / 2}
                />
                <span className="vertical-card-vote-count">
                  {(movie.vote_average / 2).toFixed(1)}
                  <span className="vertical-card-vote-count-detail">{`(${movie.vote_count})`}</span>
                </span>
              </>
            ) : (
              <span className="vertical-card-no-vote">No votes yet.</span>
            )}
          </div>
          <div className="vertical-card-date-container">
            <p className="vertical-card-date">
              {moment(movie.release_date).format("LL")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerticalCard;
