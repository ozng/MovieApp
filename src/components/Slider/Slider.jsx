import "./slider.css";
import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";

const imageURL = process.env.REACT_APP_IMG_URL;

function Slider({ popularMovies, isLoading }) {
  const navigate = useNavigate();

  const maxOverviewLength = 250;

  return (
    <div className="slider-container">
      <Carousel autoplay>
        {isLoading ? (
          <div className="slider-loading-container">
            <LoadingOutlined spin />
          </div>
        ) : (
          popularMovies?.length > 0 &&
          popularMovies.map((movie, index) => (
            <div key={index} className="slider-card-container">
              <img
                className="slider-image"
                alt="movie cover"
                src={`${imageURL}/w1280/${movie.backdrop_path}`}
              />
              <h2
                className="slider-card-title"
                onClick={() => navigate(`/movie/${movie.id}`)}
              >
                {movie.title}
              </h2>
              <p className="slider-card-overview">
                {movie.overview.length > maxOverviewLength
                  ? movie.overview.substring(0, maxOverviewLength) + "..."
                  : movie.overview}
              </p>
            </div>
          ))
        )}
      </Carousel>
    </div>
  );
}

export default Slider;
