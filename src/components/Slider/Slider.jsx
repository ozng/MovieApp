import "./slider.css";
import { Carousel } from "antd";

const imageURL = process.env.REACT_APP_IMG_URL;

function Slider({ popularMovies }) {
  const maxOverviewLength = 250;

  return (
    <div className="slider-container">
      <Carousel autoplay>
        {popularMovies.map((movie) => (
          <div key={movie.id} className="slider-card-container">
            <img
              className="slider-image"
              alt="movie cover"
              src={`${imageURL}/w1280/${movie.backdrop_path}`}
            />
            <h2 className="slider-card-title">{movie.title}</h2>
            <p className="slider-card-overview">
              {movie.overview.length > maxOverviewLength
                ? movie.overview.substring(0, maxOverviewLength) + "..."
                : movie.overview}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
