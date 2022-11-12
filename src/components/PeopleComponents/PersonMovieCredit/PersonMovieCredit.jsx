import "./personMovieCredit.css";
import { useSelector } from "react-redux";
import { Image, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { imageURL } from "../../../constants/Api";

function PersonMovieCredit() {
  const navigate = useNavigate();

  const personMovieCredit = useSelector(
    (state) => state.people.selectedPersonMovieCredits
  );

  return (
    <div className="person-movie-credit-container">
      {personMovieCredit?.cast?.map((item, index) => (
        <div key={index} className="person-movie-credit-item-container">
          <div className="person-movie-credit-image-container">
            {item.backdrop_path ? (
              <Image
                className="person-movie-credit-image"
                src={`${imageURL}/original/${item?.backdrop_path}`}
              />
            ) : (
              <div className="person-movie-credit-image-placeholder">
                <p className="person-movie-credit-no-image">No Image</p>
              </div>
            )}
          </div>

          <div className="person-movie-credit-detail-container">
            <h2
              onClick={() => navigate(`/movie/${item?.id}`)}
              className="person-movie-credit-detail-title"
            >
              {item?.title}
            </h2>
            <p className="person-movie-credit-detail-character-name">
              {item?.character}
            </p>
            <div className="person-movie-credit-detail-rate-container">
              <Rate
                tooltips={1}
                className="horizontal-card-rate"
                disabled
                defaultValue={1}
                value={1}
                count={1}
              />
              <span className="person-movie-credit-detail-rate-count">
                {(item?.vote_average).toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonMovieCredit;
