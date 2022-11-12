import { Image, notification } from "antd";
import "./peopleCard.css";
import { useNavigate } from "react-router-dom";
import { imageURL } from "../../../constants/Api";

function PeopleCard({ people }) {
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/person/${people?.id}`);
  };

  const onMovieCardClick = (id) => {
    navigate(`/movie/${id}`);
  };

  const onError = () => {
    notification.error({
      message: "Not supported",
      description:
        "You cannot display media types other than movies. Please try another one.",
    });
  };

  return (
    <div className="people-card-container">
      <div className="people-card-image-container">
        <Image
          className="people-card-image"
          src={`${imageURL}/original/${people?.profile_path}`}
        />
        <h2 className="people-card-title" onClick={onTitleClick}>
          {people?.name}
        </h2>
      </div>
      {people?.known_for?.length > 0 && (
        <div className="people-card-movie-list">
          <h3 className="people-card-known-for-title">Known for</h3>
          {people?.known_for?.map((movie, index) => (
            <div
              className="people-card-known-for-item"
              key={index}
              onClick={
                movie?.media_type === "tv"
                  ? onError
                  : () => onMovieCardClick(movie?.id)
              }
            >
              <Image
                src={`${imageURL}/original/${movie?.poster_path}`}
                className="people-card-known-for-poster-image"
                preview={false}
              />
              <p className="people-card-known-for-label">
                {movie?.media_type === "tv" ? movie?.name : movie?.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PeopleCard;
