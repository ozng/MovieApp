import "./slider.css";
import { Carousel } from "antd";

function Slider({ images }) {
  return (
    <div className="slider-container">
      <Carousel autoplay>
        {images.map((image) => (
          <img className="slider-image" alt="movie cover" src={image} />
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;
